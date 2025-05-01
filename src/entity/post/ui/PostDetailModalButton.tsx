import { MessageSquare } from "lucide-react"

import { Post } from "../types/postTypes"

import { Button } from "@/shared/ui"
import { MODAL_KEY } from "@/shared/config"
import { useModal } from "@/shared/store/useModal"

interface PostDetailModalButtonProps {
  post: Post
}

export const PostDetailModalButton = ({ post }: PostDetailModalButtonProps) => {
  const { open } = useModal<{ post: Post }>(MODAL_KEY.POST_DETAIL)

  const handleOpenPostDetail = (post: Post) => {
    open({ post })
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => handleOpenPostDetail(post)}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}
