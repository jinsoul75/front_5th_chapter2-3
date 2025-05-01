import { Plus } from "lucide-react"

import { Button } from "@/shared/ui"
import { useModal } from "@/shared/store/useModal"
import { MODAL_KEY } from "@/shared/config"

export const PostAddModalButton = () => {
  const { open } = useModal<{ postId: number }>(MODAL_KEY.ADD_POST)

  return (
    <Button onClick={() => open()}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
