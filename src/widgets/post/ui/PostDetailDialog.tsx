import { Post } from "@/entity/post/types/postTypes"

import { Comments } from "@/widgets/comment/ui/CommentList"

import { MODAL_KEY } from "@/shared/config"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { highlightText } from "@/shared/utils/highlightText"
import { useModal } from "@/shared/store/useModal"

export const PostDetailDialog = () => {
  const { isOpen, props, close } = useModal<{ post: Post; searchQuery: string }>(MODAL_KEY.POST_DETAIL)

  const selectedPost = props?.post as Post
  const searchQuery = props?.searchQuery as string

  return (
    <Dialog open={isOpen} onOpenChange={close}>
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
