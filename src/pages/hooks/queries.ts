import { useQuery, useMutation } from "@tanstack/react-query"
import { postsApi, usersApi } from "../api/postsManagerApi"
import { NewPost } from "../types/postsManagerTypes"

export const usePosts = ({
  skip,
  limit,
  sortBy,
  sortOrder,
}: {
  skip: number
  limit: number
  sortBy: string
  sortOrder: string
}) => {
  return useQuery({
    queryKey: ["posts", limit, skip, sortBy, sortOrder],
    queryFn: () => postsApi.fetchPosts(limit, skip, sortBy, sortOrder),
  })
}

export const useSearchPosts = ({ searchQuery }: { searchQuery: string }) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => postsApi.searchPosts(searchQuery),
    enabled: !!searchQuery,
  })
}

export const usePostsByTag = ({ tag }: { tag: string }) => {
  return useQuery({
    queryKey: ["posts", tag],
    queryFn: () => postsApi.fetchPostsByTag(tag),
    enabled: !!tag,
  })
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
