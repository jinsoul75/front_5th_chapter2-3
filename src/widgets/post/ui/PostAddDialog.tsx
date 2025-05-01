import { PostAddForm } from "@/entity/post/ui"
import { useAddPost } from "@/entity/post/api/useQuries"

import { MODAL_KEY } from "@/shared/config"
import { useModalStore } from "@/shared/store"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

export const PostAddDialog = () => {
  const { openedModal, closeModal } = useModalStore()
  const { mutate: addPost } = useAddPost()

  return (
    <Dialog open={openedModal === MODAL_KEY.ADD_POST} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <PostAddForm onSubmit={addPost} onCancel={closeModal} />
      </DialogContent>
    </Dialog>
  )
}
