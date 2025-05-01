import { useState } from "react"
import { MODAL_KEY } from "../../../shared/config"
import { useModalStore } from "../../../shared/store"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../../shared/ui"
import { useUpdateComment } from "../../../features/post/hooks/queries"
import { Comment } from "../../types/postsManagerTypes"

export const CommentEditDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()
  const selectedComment = modalProps?.comment as Comment
  const [updatedComment, setUpdatedComment] = useState<Comment>(selectedComment)

  const { mutate: updateComment } = useUpdateComment()

  return (
    // {/* 댓글 수정 대화상자  entity/comments/ui/comment-edit-dialog.tsx*/}
    <Dialog open={openedModal === MODAL_KEY.EDIT_COMMENT} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={updatedComment?.body || ""}
            onChange={(e) => setUpdatedComment({ ...updatedComment, body: e.target.value })}
          />
          <Button onClick={() => updateComment(updatedComment)}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
