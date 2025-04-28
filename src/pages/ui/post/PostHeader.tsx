import { PostAddButton } from "./PostAddButton"

// src/entities/post/ui/PostHeader/index.tsx
export const PostHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <span>게시물 관리자</span>
      <PostAddButton />
    </div>
  )
}
