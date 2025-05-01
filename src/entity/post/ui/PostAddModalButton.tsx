import { Plus } from "lucide-react"
import { Button } from "@/shared/ui"
import { useModalStore } from "@/shared/store"
import { MODAL_KEY } from "@/shared/config"

export const PostAddModalButton = () => {
  const { openModal } = useModalStore()

  return (
    <Button onClick={() => openModal(MODAL_KEY.ADD_POST)}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
