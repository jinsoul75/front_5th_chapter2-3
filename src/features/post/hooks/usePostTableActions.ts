import { useModalStore } from "@/shared/store"
import { useDeletePost } from "@/entity/post/api/useQuries"
import { MODAL_KEY } from "@/shared/config"
import { Post } from "@/entity/post/types/postTypes"

export const usePostTableActions = () => {
  const { openModal } = useModalStore()
  const { mutate: deletePost } = useDeletePost()

  return {
    handleOpenUserModal: (userId: number) => {
      openModal(MODAL_KEY.USER_DETAIL, { userId })
    },
    handleOpenPostDetail: (post: Post) => {
      openModal(MODAL_KEY.POST_DETAIL, { post })
    },
    handleOpenEditDialog: (post: Post) => {
      openModal(MODAL_KEY.EDIT_POST, { post })
    },
    handleDeletePost: (postId: string) => {
      deletePost(postId)
    },
  }
}
