import { useMutation, useQuery } from "@tanstack/react-query"
import { commentsApi } from "./commentApi"
import { Comment, NewComment } from "../types/commnetTypes"

export const useComments = ({ postId }: { postId: string }) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentsApi.fetchComments(postId),
  })
}

export const useLikeComment = () => {
  return useMutation({
    mutationFn: ({ commentId, likes }: { commentId: number; likes: number }) =>
      commentsApi.likeComment(commentId, likes + 1),
  })
}

export const useAddComment = () => {
  return useMutation({
    mutationFn: (newComment: NewComment) => commentsApi.addComment(newComment),
  })
}

export const useUpdateComment = () => {
  return useMutation({
    mutationFn: (comment: Comment) => commentsApi.updateComment(comment),
  })
}

export const useDeleteComment = () => {
  return useMutation({
    mutationFn: (commentId: number) => commentsApi.deleteComment(commentId),
  })
}
