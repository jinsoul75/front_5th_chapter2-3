import { useUpdateComment } from "@/entity/comment/api/useQuries"
import { Comment } from "@/entity/comment/types/commnetTypes"

import { MODAL_KEY } from "@/shared/config"
import { useModalStore } from "@/shared/store"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { CommentEditForm } from "@/entity/comment/ui/CommentEditFrom"

export const CommentEditDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()
  const selectedComment = modalProps?.comment as Comment

  const { mutate: updateComment } = useUpdateComment()

  return (
    <Dialog open={openedModal === MODAL_KEY.EDIT_COMMENT} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <CommentEditForm comment={selectedComment} onSubmit={updateComment} />
      </DialogContent>
    </Dialog>
  )
}
