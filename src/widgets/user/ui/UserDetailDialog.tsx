import { useUserDetail } from "@/entity/user/api/useQuries"
import { UserDetail } from "@/entity/user/ui/UserDetail"

import { MODAL_KEY } from "@/shared/config"
import { useModal } from "@/shared/store/useModal"
import { DialogContent, DialogHeader, DialogTitle, Dialog } from "@/shared/ui"

// shared와 entity의 조합의 UI -> widget
export const UserDetailDialog = () => {
  const { isOpen, props, close } = useModal<{ userId: number }>(MODAL_KEY.USER_DETAIL)

  const userId = props?.userId as number

  const { data: selectedUser } = useUserDetail({ userId })

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>사용자 정보</DialogTitle>
        </DialogHeader>
        {selectedUser && <UserDetail selectedUser={selectedUser} />}
      </DialogContent>
    </Dialog>
  )
}
