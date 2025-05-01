import { useState } from "react"

import { NewPost } from "../types/postTypes"

import { INITIAL_POST } from "@/features/post/config/searchParams"

import { Input, Textarea, Button } from "@/shared/ui"

interface PostAddFormProps {
  onSubmit: (newPost: NewPost) => void
  closeModal: () => void
}

export const PostAddForm = ({ onSubmit, closeModal }: PostAddFormProps) => {
  const [newPost, setNewPost] = useState<NewPost>(INITIAL_POST)

  const handleSubmit = () => {
    onSubmit(newPost)
    setNewPost(INITIAL_POST)
    closeModal()
  }

  return (
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
        min={1}
        value={newPost.userId}
        onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
      />
      <Button onClick={handleSubmit}>게시물 추가</Button>
    </div>
  )
}
