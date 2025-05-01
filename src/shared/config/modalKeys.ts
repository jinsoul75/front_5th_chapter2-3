export const MODAL_KEY = {
  ADD_POST: "add",
  EDIT_POST: "edit",
  ADD_COMMENT: "addComment",
  EDIT_COMMENT: "editComment",
  POST_DETAIL: "postDetail",
  USER_DETAIL: "user",
} as const

export type ModalKey = (typeof MODAL_KEY)[keyof typeof MODAL_KEY]
