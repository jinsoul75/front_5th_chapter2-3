export interface User {
  id: number
  username: string
  image?: string
  firstName?: string
  lastName?: string
  age?: number
  email?: string
  phone?: string
  address?: {
    address: string
    city: string
    state: string
  }
  company?: {
    name: string
    title: string
  }
}

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

export interface Comment {
  id: number
  body: string
  postId: number
  user: User
  likes: number
}

export type NewComment = Omit<Comment, "id" | "user" | "likes">

export interface Tag {
  url: string
  slug: string
}
