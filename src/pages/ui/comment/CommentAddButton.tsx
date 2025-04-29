import { Plus } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useModalStore } from "../../../shared/store"
import { MODAL_KEY } from "../../../shared/config"

export const CommentAddButton = ({ postId }: { postId: number }) => {
  const { openModal } = useModalStore()

  return (
    <Button
      size="sm"
      onClick={() => {
        openModal(MODAL_KEY.ADD, { postId })
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}
