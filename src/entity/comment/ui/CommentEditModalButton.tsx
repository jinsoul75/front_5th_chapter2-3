import { Edit2 } from "lucide-react"

import { Comment } from "@/entity/comment/types/commnetTypes"

import { useModalStore } from "@/shared/store"
import { MODAL_KEY } from "@/shared/config"
import { Button } from "@/shared/ui"

export const CommentEditModalButton = ({ comment }: { comment: Comment }) => {
  const { openModal } = useModalStore()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        openModal(MODAL_KEY.EDIT_COMMENT, { comment })
      }}
    >
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}
