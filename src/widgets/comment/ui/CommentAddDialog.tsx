import { CommentAddForm } from "@/entity/comment/ui"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { MODAL_KEY } from "@/shared/config"
import { useModal } from "@/shared/store/useModal"

export const CommentAddDialog = () => {
  const { isOpen, props, close } = useModal<{ postId: number }>(MODAL_KEY.ADD_COMMENT)

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <CommentAddForm closeModal={close} postId={props?.postId as number} />
      </DialogContent>
    </Dialog>
  )
}
