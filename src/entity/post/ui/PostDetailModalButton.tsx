import { MessageSquare } from "lucide-react"

import { Post } from "../types/postTypes"

import { Button } from "@/shared/ui"
import { useModalStore } from "@/shared/store"
import { MODAL_KEY } from "@/shared/config"

interface PostDetailModalButtonProps {
  post: Post
}

export const PostDetailModalButton = ({ post }: PostDetailModalButtonProps) => {
  const { openModal } = useModalStore()

  const handleOpenPostDetail = (post: Post) => {
    openModal(MODAL_KEY.POST_DETAIL, { post })
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => handleOpenPostDetail(post)}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}
