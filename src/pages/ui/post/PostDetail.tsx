import { MODAL_KEY } from "../../../shared/config"
import { useModalStore } from "../../../shared/store"
import { DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui"

import { Dialog } from "../../../shared/ui"
import { Post } from "../../types/postsManagerTypes"
import { highlightText } from "../../utils/highlightText"
import { Comments } from "../comment/CommentList"

export const PostDetail = () => {
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
