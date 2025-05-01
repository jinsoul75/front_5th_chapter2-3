import { Plus } from "lucide-react"
import { Button } from "@/shared/ui"
import { useModalStore } from "@/shared/store"
import { ModalKey } from "@/shared/config"

interface AddModalButtonProps {
  modalKey: ModalKey
  label: string
}

// UI만 보여주는 게 아니라 useModalStore 상태 로직을 포함
// shared가 아니라 widget이 맞다..?

export const AddModalButton = ({ modalKey, label }: AddModalButtonProps) => {
  const { openModal } = useModalStore()

  return (
    <Button onClick={() => openModal(modalKey)}>
      <Plus className="w-4 h-4 mr-2" />
      {label}
    </Button>
  )
}
