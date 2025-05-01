import { Edit2 } from "lucide-react"

import { Button } from "@/shared/ui"
import { useModalStore } from "@/shared/store"
import { Post } from "../types/postTypes"
import { MODAL_KEY } from "@/shared/config"

interface PostEditModalButtonProps {
  post: Post
}

export const PostEditModalButton = ({ post }: PostEditModalButtonProps) => {
  const { openModal } = useModalStore()

  const handleOpenEditDialog = (post: Post) => {
    openModal(MODAL_KEY.EDIT_POST, { post })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        handleOpenEditDialog(post)
      }}
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}
