import { Edit2 } from "lucide-react"

import { Post } from "../types/postTypes"

import { Button } from "@/shared/ui"
import { useModal } from "@/shared/store/useModal"
import { MODAL_KEY } from "@/shared/config"

interface PostEditModalButtonProps {
  post: Post
}

export const PostEditModalButton = ({ post }: PostEditModalButtonProps) => {
  const { open } = useModal<{ post: Post }>(MODAL_KEY.EDIT_POST)

  const handleOpenEditDialog = (post: Post) => {
    open({ post })
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
