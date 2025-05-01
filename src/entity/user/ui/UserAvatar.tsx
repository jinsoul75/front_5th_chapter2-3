import { User } from "../types/userTypes"

import { useModalStore } from "@/shared/store"
import { MODAL_KEY } from "@/shared/config"

interface UserAvatarProps {
  user: User
}

export const UserAvatar = ({ user }: UserAvatarProps) => {
  const { openModal } = useModalStore()

  const handleOpenUserModal = (userId: number) => {
    openModal(MODAL_KEY.USER_DETAIL, { userId })
  }

  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleOpenUserModal(user.id)}>
      <img src={user.image} alt={user.username} className="w-8 h-8 rounded-full" />
      <span>{user.username}</span>
    </div>
  )
}
