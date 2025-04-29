import { useState } from "react"
import { useModalStore } from "../../../shared/store"
import { DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui"

import { Dialog } from "../../../shared/ui"

import { Textarea } from "../../../shared/ui"

import { Button } from "../../../shared/ui"
import { NewComment } from "../../types/postsManagerTypes"
import { MODAL_KEY } from "../../../shared/config"
import { useAddComment } from "../../hooks/queries"

export const CommentAddDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()
  const postId = modalProps?.postId as number
  const [newComment, setNewComment] = useState<NewComment>({
    body: "",
    postId,
  })
  const { mutate: addComment } = useAddComment()
  return (
    // {/* 댓글 추가 대화상자  entity/comments/ui/comment-add-dialog.tsx*/}
    <Dialog open={openedModal === MODAL_KEY.ADD} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={() => addComment(newComment)}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
