import { useUpdatePost } from "@/entity/post/api/useQuries"
import { Post } from "@/entity/post/types/postTypes"

import { MODAL_KEY } from "@/shared/config"
import { useModalStore } from "@/shared/store"
import { DialogContent, DialogHeader, DialogTitle, Dialog } from "@/shared/ui"
import { PostEditForm } from "@/entity/post/ui"

export const PostEditDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()
  const selectedPost = modalProps?.post as Post

  const { mutate: updatePost } = useUpdatePost()

  return (
    <Dialog open={openedModal === MODAL_KEY.EDIT_POST} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <PostEditForm post={selectedPost} onSubmit={updatePost} />
      </DialogContent>
    </Dialog>
  )
}
