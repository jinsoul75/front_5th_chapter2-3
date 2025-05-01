import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { commentsApi } from "./commentApi"
import { Comment, NewComment } from "../types/commnetTypes"

export const useComments = ({ postId }: { postId: number }) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentsApi.fetchComments(postId),
  })
}

export const useLikeComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ commentId, likes }: { commentId: number; likes: number }) =>
      commentsApi.likeComment(commentId, likes + 1),
    onSuccess: (updatedComment) => {
      const activeQueries = queryClient.getQueriesData<Comment[]>({ queryKey: ["comments"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const updatedComments = data.map((comment) => {
            if (comment.id === updatedComment.id) {
              return { ...updatedComment, likes: updatedComment.likes + 1 }
            }
            return comment
          })
          queryClient.setQueryData(queryKey, updatedComments)
        }
      })
    },
  })
}

export const useAddComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newComment: NewComment) => commentsApi.addComment(newComment),
    onSuccess: (newComment) => {
      const activeQueries = queryClient.getQueriesData<Comment[]>({ queryKey: ["comments"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const addLikesNewComment = { ...newComment, likes: 0 }

          queryClient.setQueryData(queryKey, [addLikesNewComment, ...data])
        }
      })
    },
  })
}

export const useUpdateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (comment: Comment) => commentsApi.updateComment(comment),
    onSuccess: (updatedComment) => {
      const activeQueries = queryClient.getQueriesData<Comment[]>({ queryKey: ["comments"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const updatedComments = data.map((comment) => (comment.id === updatedComment.id ? updatedComment : comment))
          queryClient.setQueryData(queryKey, updatedComments)
        }
      })
    },
  })
}

export const useDeleteComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (commentId: number) => commentsApi.deleteComment(commentId),
    onSuccess: (deletedComment) => {
      const activeQueries = queryClient.getQueriesData<Comment[]>({ queryKey: ["comments"] })

      activeQueries.forEach(([queryKey, data]) => {
        if (data) {
          const updatedComments = data.filter((comment) => comment.id !== deletedComment.id)
          queryClient.setQueryData(queryKey, updatedComments)
        }
      })
    },
  })
}
