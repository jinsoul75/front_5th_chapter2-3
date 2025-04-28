import { Plus } from "lucide-react"
import { Button } from "../../../shared/ui"

export const PostAddButton = () => {
  //   const { openModal } = useModalStore()

  return (
    <Button
    //  onClick={() => openModal("addPost")}
    >
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}
