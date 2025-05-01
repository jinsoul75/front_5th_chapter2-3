import { useState } from "react"

import { Button, Input, Textarea } from "@/shared/ui"

import { Post } from "../types/postTypes"
import { useModalStore } from "@/shared/store"

interface PostEditFormProps {
  post: Post
  onSubmit: (updatedPost: Post) => void
}

export const PostEditForm = ({ post, onSubmit }: PostEditFormProps) => {
  const [updatedPost, setUpdatedPost] = useState<Post>(post)
  const { closeModal } = useModalStore()

  const handleSubmit = () => {
    onSubmit(updatedPost)
    setUpdatedPost(post)
    closeModal()
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="제목"
        value={updatedPost?.title || ""}
        onChange={(e) => setUpdatedPost({ ...post, title: e.target.value })}
      />
      <Textarea
        rows={15}
        placeholder="내용"
        value={updatedPost?.body || ""}
        onChange={(e) => setUpdatedPost({ ...post, body: e.target.value })}
      />
      <Button onClick={handleSubmit}>게시물 업데이트</Button>
    </div>
  )
}
