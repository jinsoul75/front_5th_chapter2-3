import { PostAddForm } from "@/entity/post/ui"

import { MODAL_KEY } from "@/shared/config"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { useModal } from "@/shared/store/useModal"

export const PostAddDialog = () => {
  const { isOpen, close } = useModal<{ postId: number }>(MODAL_KEY.ADD_POST)

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <PostAddForm closeModal={close} />
      </DialogContent>
    </Dialog>
  )
}
