import { useState } from "react"

import { Comment } from "../types/commnetTypes"

import { Button, Textarea } from "@/shared/ui"

interface CommentEditFormProps {
  comment: Comment
  onSubmit: (comment: Comment) => void
}

export const CommentEditForm = ({ comment, onSubmit }: CommentEditFormProps) => {
  const [updatedComment, setUpdatedComment] = useState<Comment>(comment)

  const handleUpdateComment = () => {
    onSubmit(updatedComment)
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
