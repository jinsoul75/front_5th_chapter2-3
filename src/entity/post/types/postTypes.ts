import { User } from "@/entity/user/types/userTypes"

export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags?: string[]
  reactions?: {
    likes: number
    dislikes: number
  }
  author?: User
}

export type NewPost = Omit<Post, "id" | "author" | "tags" | "reactions">

export interface Tag {
  url: string
  slug: string
}
