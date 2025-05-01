import { Comment } from "@/entity/comment/types/commnetTypes"
import { CommentEditForm } from "@/entity/comment/ui/CommentEditFrom"

import { MODAL_KEY } from "@/shared/config"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { useModal } from "@/shared/store/useModal"

export const CommentEditDialog = () => {
  const { isOpen, props, close } = useModal<{ comment: Comment }>(MODAL_KEY.EDIT_COMMENT)

  const selectedComment = props?.comment as Comment

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <CommentEditForm comment={selectedComment} closeModal={close} />
      </DialogContent>
    </Dialog>
  )
}
