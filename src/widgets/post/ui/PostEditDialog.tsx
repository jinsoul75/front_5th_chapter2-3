import { useModalStore } from "../../../shared/store"
import { Button } from "../../../shared/ui"

import { Input, Textarea } from "../../../shared/ui"

import { DialogHeader, DialogTitle } from "../../../shared/ui"

import { DialogContent } from "../../../shared/ui"

import { Dialog } from "../../../shared/ui"
import { Post } from "../../types/postsManagerTypes"
import { MODAL_KEY } from "../../../shared/config"
import { useUpdatePost } from "../../../features/post/hooks/queries"
import { useState } from "react"
export const PostEditDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()
  const selectedPost = modalProps?.post as Post
  const { mutate: updatePost } = useUpdatePost()
  const [updatedPost, setUpdatedPost] = useState<Post>(selectedPost)

  return (
    // {/* 게시물 수정 대화상자  entity/posts/ui/post-edit-dialog.tsx*/}
    <Dialog open={openedModal === MODAL_KEY.EDIT_POST} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={updatedPost?.title || ""}
            onChange={(e) => setUpdatedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={updatedPost?.body || ""}
            onChange={(e) => setUpdatedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={() => updatePost(updatedPost)}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
