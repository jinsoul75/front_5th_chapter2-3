import { Trash2 } from "lucide-react"

import { useDeletePost } from "@/entity/post/api/useQuries"
import { Post } from "@/entity/post/types/postTypes"

import { Button } from "@/shared/ui"

interface PostDeleteButtonProps {
  post: Post
}

export const PostDeleteButton = ({ post }: PostDeleteButtonProps) => {
  const { mutate: deletePost } = useDeletePost()

  const handleDeletePost = (postId: number) => {
    deletePost(postId)
  }
  return (
    <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}
