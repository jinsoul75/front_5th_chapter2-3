import { useState } from "react"

import { Post } from "../types/postTypes"
import { useUpdatePost } from "../api/useQuries"

import { Button, Input, Textarea } from "@/shared/ui"

interface PostEditFormProps {
  post: Post
  closeModal: () => void
}

export const PostEditForm = ({ post, closeModal }: PostEditFormProps) => {
  const [updatedPost, setUpdatedPost] = useState<Post>(post)

  const { mutate: updatePost } = useUpdatePost()

  const handleSubmit = () => {
    updatePost(updatedPost)
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
