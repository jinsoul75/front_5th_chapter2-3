import { useQuery, useMutation } from "@tanstack/react-query"
import { postsApi, commentsApi, usersApi } from "../api/postsManagerApi"
import { NewPost } from "../types/postsManagerTypes"

export const usePosts = (limit: number, skip: number) => {
  return useQuery({
    queryKey: ["posts", limit, skip],
    queryFn: () => postsApi.fetchPosts(limit, skip),
  })
}

export const useAddPost = () => {
  return useMutation({
    mutationFn: (newPost: NewPost) => postsApi.addPost(newPost),
  })
}
