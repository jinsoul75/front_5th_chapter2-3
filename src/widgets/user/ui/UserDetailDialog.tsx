import { MODAL_KEY } from "@/shared/config"
import { useModalStore } from "@/shared/store"
import { DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"

import { Dialog } from "@/shared/ui"
import { useUserDetail } from "@/entity/user/api/useQuries"
import { UserDetail } from "@/entity/user/ui/UserDetail"

export const UserDetailDialog = () => {
  const { openedModal, closeModal, modalProps } = useModalStore()

  const userId = modalProps?.userId as number

  const { data: selectedUser } = useUserDetail({ userId })

  return (
    <Dialog open={openedModal === MODAL_KEY.USER_DETAIL} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>사용자 정보</DialogTitle>
        </DialogHeader>
        {selectedUser && <UserDetail selectedUser={selectedUser} />}
      </DialogContent>
    </Dialog>
  )
}
