import { Plus } from "lucide-react"

import { useModalStore } from "@/shared/store"
import { MODAL_KEY } from "@/shared/config"
import { Button } from "@/shared/ui"

export const CommentAddModalButton = ({ postId }: { postId: number }) => {
  const { openModal } = useModalStore()

  return (
    <Button
      size="sm"
      onClick={() => {
        openModal(MODAL_KEY.ADD_COMMENT, { postId })
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}
