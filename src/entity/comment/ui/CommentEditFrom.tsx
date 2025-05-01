import { useState } from "react"

import { Comment } from "../types/commnetTypes"

import { Button, Textarea } from "@/shared/ui"
import { useUpdateComment } from "../api/useQuries"

interface CommentEditFormProps {
  comment: Comment
  closeModal: () => void
}

export const CommentEditForm = ({ comment, closeModal }: CommentEditFormProps) => {
  const [updatedComment, setUpdatedComment] = useState<Comment>(comment)
  const { mutate: updateComment } = useUpdateComment()

  const handleUpdateComment = () => {
    updateComment(updatedComment)
    closeModal()
  }

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedComment({ ...updatedComment, body: e.target.value })
  }

  return (
    <div className="space-y-4">
      <Textarea placeholder="댓글 내용" value={updatedComment?.body || ""} onChange={handleChangeComment} />
      <Button onClick={handleUpdateComment}>댓글 업데이트</Button>
    </div>
  )
}
