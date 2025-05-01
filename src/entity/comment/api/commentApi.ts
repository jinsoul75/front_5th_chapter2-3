import { axiosInstance } from "@/shared/api/axiosInstance"
import { Comment, NewComment } from "@/entity/comment/types/commnetTypes"

export const commentsApi = {
  // 댓글 목록 가져오기
  fetchComments: async (postId: number) => {
    try {
      const { data } = await axiosInstance(`/comments/post/${postId}`)
      return data.comments
    } catch (error) {
      console.error("댓글 목록 가져오기 오류:", error)
      throw error
    }
  },

  // 댓글 추가
  addComment: async (newComment: NewComment) => {
    try {
      const { data } = await axiosInstance.post("/comments/add", newComment)
      return data
    } catch (error) {
      console.error("댓글 추가 오류:", error)
      throw error
    }
  },

  // 댓글 수정
  updateComment: async (comment: Comment) => {
    try {
      const { data } = await axiosInstance.put(`/comments/${comment.id}`, { body: comment.body })
      return data
    } catch (error) {
      console.error("댓글 수정 오류:", error)
      throw error
    }
  },

  // 댓글 삭제
  deleteComment: async (id: number) => {
    try {
      const { data } = await axiosInstance.delete(`/comments/${id}`)
      return data
    } catch (error) {
      console.error("댓글 삭제 오류:", error)
      throw error
    }
  },

  // 댓글 좋아요
  likeComment: async (id: number, likes: number) => {
    try {
      const { data } = await axiosInstance.patch(`/comments/${id}`, { likes })
      return data
    } catch (error) {
      console.error("댓글 좋아요 오류:", error)
      throw error
    }
  },
}
