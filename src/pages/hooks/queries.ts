import { useQuery, useMutation } from "@tanstack/react-query"
import { postsApi, commentsApi, usersApi } from "../api/postsManagerApi"
import { NewPost } from "../types/postsManagerTypes"

export const usePosts = ({
  skip,
  limit,
  searchQuery,
  sortBy,
  sortOrder,
  selectedTag,
}: {
  skip: number
  limit: number
  searchQuery: string
  sortBy: string
  sortOrder: string
  selectedTag: string
}) => {
  return useQuery({
    queryKey: ["posts", limit, skip, searchQuery, sortBy, sortOrder, selectedTag],
    queryFn: () => postsApi.fetchPosts(limit, skip, searchQuery, sortBy, sortOrder, selectedTag),
  })
}

export const useAddPost = () => {
  return useMutation({
    mutationFn: (newPost: NewPost) => postsApi.addPost(newPost),
  })
}
