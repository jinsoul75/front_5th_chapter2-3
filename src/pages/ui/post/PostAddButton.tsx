import { Plus } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useModalStore } from "../../../shared/store"
import { MODAL_KEY } from "../../../shared/config"

export const PostAddButton = () => {
  const { openModal } = useModalStore()

  return (
    <Button onClick={() => openModal(MODAL_KEY.ADD)}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
