import { useState } from "react"

import { NewComment } from "../types/commnetTypes"

import { Button, Textarea } from "@/shared/ui"
import { useAddComment } from "../api/useQuries"

interface CommentAddFormProps {
  postId: number
  closeModal: () => void
}

export const CommentAddForm = ({ postId, closeModal }: CommentAddFormProps) => {
  const [newComment, setNewComment] = useState<NewComment>({
    body: "",
    postId,
    userId: 1,
  })

  const { mutate: addComment } = useAddComment()

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({ ...newComment, body: e.target.value })
  }

  const handleAddComment = () => {
    addComment(newComment)
    closeModal()
  }

  return (
    <div className="space-y-4">
      <Textarea placeholder="댓글 내용" value={newComment.body} onChange={handleChangeComment} />
      <Button onClick={handleAddComment}>댓글 추가</Button>
    </div>
  )
}
