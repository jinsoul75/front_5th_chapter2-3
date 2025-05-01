import { useAddComment } from "@/entity/comment/api/useQuries"
import { CommentAddForm } from "@/entity/comment/ui"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { MODAL_KEY } from "@/shared/config"
import { useModalStore } from "@/shared/store"

export const CommentAddDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()
  const postId = modalProps?.postId as number

  const { mutate: addComment } = useAddComment()

  return (
    <Dialog open={openedModal === MODAL_KEY.ADD_COMMENT} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <CommentAddForm addComment={addComment} postId={postId} />
      </DialogContent>
    </Dialog>
  )
}
