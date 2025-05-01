import { Post } from "@/entity/post/types/postTypes"

import { Comments } from "@/widgets/comment/ui/CommentList"

import { MODAL_KEY } from "@/shared/config"
import { useModalStore } from "@/shared/store"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { highlightText } from "@/shared/utils/highlightText"

export const PostDetailDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()

  const selectedPost = modalProps?.post as Post
  const searchQuery = modalProps?.searchQuery as string

  return (
    <Dialog open={openedModal === MODAL_KEY.POST_DETAIL} onOpenChange={closeModal}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          <Comments postId={selectedPost?.id} searchQuery={searchQuery} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
