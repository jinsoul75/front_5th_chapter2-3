import { useState } from "react"
import { MODAL_KEY } from "../../../shared/config"
import { useModalStore } from "../../../shared/store"
import { DialogHeader, DialogTitle, Input, Textarea, Button, DialogContent, Dialog } from "../../../shared/ui"
import { NewPost } from "../../types/postsManagerTypes"
import { useAddPost } from "../../hooks/queries"

export const PostAddDialog = () => {
  const [newPost, setNewPost] = useState<NewPost>({
    title: "",
    body: "",
    userId: 0,
  })

  const { openedModal, closeModal } = useModalStore()
  const { mutate: addPost } = useAddPost()

  return (
    // {/* 게시물 추가 대화상자  entity/posts/ui/post-add-dialog.tsx*/}
    <Dialog open={openedModal === MODAL_KEY.ADD} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={() => addPost(newPost)}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
