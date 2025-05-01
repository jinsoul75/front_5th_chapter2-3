import { CardLayout } from "@/app/layouts/CardLayout"

import { PostList } from "@/widgets/post/ui/PostList"
import { PostAddDialog, PostEditDialog, PostDetailDialog } from "@/widgets/post/ui"
import { UserDetailDialog } from "@/widgets/user/ui/UserDetailDialog"
import { CommentAddDialog, CommentEditDialog } from "@/widgets/comment/ui"

import { PostHeader } from "@/entity/post/ui/PostHeader"

// dialog가 많아지면 페이지에서 빼버리는것도 고려해볼것
const PostManagerPage = () => {
  return (
    <CardLayout header={<PostHeader />}>
      <PostList />
      <PostAddDialog />
      <UserDetailDialog />
      <PostEditDialog />
      <PostDetailDialog />
      <CommentAddDialog />
      <CommentEditDialog />
    </CardLayout>
  )
}

export default PostManagerPage
