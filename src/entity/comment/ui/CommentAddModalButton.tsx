import { Plus } from "lucide-react"

import { MODAL_KEY } from "@/shared/config"
import { Button } from "@/shared/ui"
import { useModal } from "@/shared/store/useModal"

export const CommentAddModalButton = ({ postId }: { postId: number }) => {
  const { open } = useModal<{ postId: number }>(MODAL_KEY.ADD_COMMENT)

  return (
    <Button
      size="sm"
      onClick={() => {
        open({ postId })
      }}
    >
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}
