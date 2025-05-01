import { User } from "@/entity/user/types/userTypes"

export interface Comment {
  id: number
  body: string
  postId: number
  user: User
  likes: number
}

export interface NewComment {
  body: string
  userId: number
  postId: number
}
