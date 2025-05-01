import { useQuery, useMutation, useQueries, useQueryClient } from "@tanstack/react-query"
import { postsApi } from "./postApi"
import { NewPost, Post } from "@/entity/post/types/postTypes"
import { User } from "@/entity/user/types/userTypes"
import { usersApi } from "@/entity/user/api/userApi"
export const usePosts = ({
  skip,
  limit,
  sortBy,
  sortOrder,
  searchQuery,
  selectedTag,
}: {
  skip: number
  limit: number
  sortBy: string
  sortOrder: string
  searchQuery?: string
  selectedTag?: string
}) => {
  // user 데이터는 자주 안바뀌는것으로 간주
  // post 데이터는 자주 바뀔것으로 간주해서 캐싱전략 x
  const result = useQueries({
    queries: [
      {
        queryKey: ["posts", limit, skip, sortBy, sortOrder, selectedTag],
        queryFn: () => {
          if (searchQuery) {
            return postsApi.searchPosts(searchQuery, limit, skip, sortBy, sortOrder)
          }

          if (selectedTag && selectedTag !== "all") {
            return postsApi.fetchPostsByTag(selectedTag, limit, skip, sortBy, sortOrder)
          }

          return postsApi.fetchPosts(limit, skip, sortBy, sortOrder)
        },
      },
      {
        queryKey: ["users"],
        queryFn: () => usersApi.fetchUsers(),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
      },
    ],
  })

  const [dataResult, userResult] = result

  const postsWithUser = dataResult.data?.posts.map((post: Post) => ({
    ...post,
    author: userResult.data?.users.find((user: User) => user.id === post.userId),
  }))

  return {
    data: postsWithUser,
    isLoading: dataResult.isLoading || userResult.isLoading,
    refetch: () => {
      return Promise.all([dataResult.refetch(), userResult.refetch()])
    },
    total: dataResult.data?.total,
  }
}

export const useAddPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newPost: NewPost) => postsApi.addPost(newPost),
    onSuccess: (newPost) => {
      const activeQueries = queryClient.getQueriesData<{ posts: Post[]; total: number }>({ queryKey: ["posts"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const updatedData = {
            ...data,
            posts: [newPost, ...data.posts],
            total: data.total + 1,
          }
          queryClient.setQueryData(queryKey, updatedData)
        }
      })
    },
  })
}

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => postsApi.fetchTags(),
    staleTime: Infinity,
    gcTime: Infinity,
  })
}

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (postId: string) => postsApi.deletePost(postId),
    onSuccess: (deletedPost) => {
      const activeQueries = queryClient.getQueriesData<{ posts: Post[]; total: number }>({ queryKey: ["posts"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const updatedData = {
            ...data,
            posts: data.posts.filter((post) => post.id !== deletedPost.id),
            total: data.total - 1,
          }

          queryClient.setQueryData(queryKey, updatedData)
        }
      })
    },
  })
}

export const useUpdatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: Post) => postsApi.updatePost(post),
    onSuccess: (updatedPost) => {
      const activeQueries = queryClient.getQueriesData<{ posts: Post[]; total: number }>({ queryKey: ["posts"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const updatedData = {
            ...data,
            posts: data.posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)),
          }
          queryClient.setQueryData(queryKey, updatedData)
        }
      })
    },
  })
}
