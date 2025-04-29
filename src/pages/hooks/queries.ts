import { useQuery, useMutation, useQueries } from "@tanstack/react-query"
import { commentsApi, postsApi, usersApi } from "../api/postsManagerApi"
import { NewPost, Post, User } from "../types/postsManagerTypes"

export const usePosts = ({
  skip,
  limit,
  sortBy,
  sortOrder,
  searchQuery,
  tag,
}: {
  skip: number
  limit: number
  sortBy: string
  sortOrder: string
  searchQuery?: string
  tag?: string
}) => {
  const result = useQueries({
    queries: [
      {
        queryKey: ["posts", limit, skip, sortBy, sortOrder],
        queryFn: () => {
          if (searchQuery) {
            return postsApi.searchPosts(searchQuery)
          }
          if (tag) {
            return postsApi.fetchPostsByTag(tag)
          }
          return postsApi.fetchPosts(limit, skip, sortBy, sortOrder)
        },
      },
      {
        queryKey: ["users"],
        queryFn: () => usersApi.fetchUsers(),
      },
    ],
  })

  const [dataResult, userResult] = result

  const postsWithUser = dataResult.data?.posts.map((post: Post) => ({
    ...post,
    user: userResult.data?.users.find((user: User) => user.id === post.userId),
  }))

  return {
    data: postsWithUser,
    isLoading: dataResult.isLoading || userResult.isLoading,
    refetch: () => {
      return Promise.all([dataResult.refetch(), userResult.refetch()])
    },
  }
}

export const useAddPost = () => {
  return useMutation({
    mutationFn: (newPost: NewPost) => postsApi.addPost(newPost),
  })
}

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => postsApi.fetchTags(),
  })
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => usersApi.fetchUsers(),
  })
}

export const useUserDetail = ({ userId }: { userId: number }) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => usersApi.fetchUserDetail(userId),
    enabled: !!userId,
  })
}

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (postId: number) => postsApi.deletePost(postId),
  })
}

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: (post: Post) => postsApi.updatePost(post),
  })
}

export const useComments = ({ postId, searchQuery }: { postId: number; searchQuery: string }) => {
  return useQuery({
    queryKey: ["comments", postId, searchQuery],
    queryFn: () => commentsApi.fetchComments(postId),
  })
}
