import axios from "axios"
import { Comment, NewComment } from "@/entity/comment/types/commnetTypes"

export const commentsApi = {
  // 댓글 목록 가져오기
  fetchComments: async (postId: string) => {
    const { data } = await axios(`/api/comments/post/${postId}`)
    return data.comments
  },

  // 댓글 추가
  addComment: async (newComment: NewComment) => {
    const { data } = await axios.post("/api/comments/add", newComment)
    return data
  },

  // 댓글 수정
  updateComment: async (comment: Comment) => {
    const { data } = await axios.put(`/api/comments/${comment.id}`, { body: comment.body })
    return data
  },

  // 댓글 삭제
  deleteComment: async (id: number) => {
    const { data } = await axios.delete(`/api/comments/${id}`)
    return data
  },

  // 댓글 좋아요
  likeComment: async (id: number, likes: number) => {
    const { data } = await axios.patch(`/api/comments/${id}`, { likes })
    return data
  },
}
