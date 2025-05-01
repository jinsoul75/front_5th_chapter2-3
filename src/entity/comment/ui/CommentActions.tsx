import { CommentLikeButton } from "@/features/comment/ui/CommentLikeButton"
import { CommentEditModalButton } from "@/entity/comment/ui/CommentEditModalButton"
import { CommentDeleteButton } from "@/features/comment/ui/CommentDeleteButton"
import { Comment } from "../types/commnetTypes"

export const CommentActions = ({ comment }: { comment: Comment }) => {
  return (
    <>
      <CommentLikeButton comment={comment} likes={comment.likes} />
      <CommentEditModalButton comment={comment} />
      <CommentDeleteButton comment={comment} />
    </>
  )
}
