export const MODAL_KEY = {
  ADD: "add",
  EDIT: "edit",
  ADD_COMMENT: "addComment",
  EDIT_COMMENT: "editComment",
  POST_DETAIL: "postDetail",
  USER: "user",
} as const

export type ModalKey = (typeof MODAL_KEY)[keyof typeof MODAL_KEY]
