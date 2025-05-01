import { Post } from "@/entity/post/types/postTypes"
import { PostEditForm } from "@/entity/post/ui"

import { DialogContent, DialogHeader, DialogTitle, Dialog } from "@/shared/ui"
import { useModal } from "@/shared/store/useModal"
import { MODAL_KEY } from "@/shared/config"

export const PostEditDialog = () => {
  const { isOpen, props, close } = useModal<{ post: Post }>(MODAL_KEY.EDIT_POST)
  const selectedPost = props?.post as Post

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <PostEditForm post={selectedPost} closeModal={close} />
      </DialogContent>
    </Dialog>
  )
}
