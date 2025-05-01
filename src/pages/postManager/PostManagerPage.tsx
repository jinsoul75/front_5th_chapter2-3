import { PostHeader, PostAddDialog, PostEditDialog, PostDetailDialog } from "@/widgets/post/ui"
import { UserDetailDialog } from "@/widgets/user/ui/UserDetailDialog"
import { CardLayout } from "@/app/layouts/CardLayout"
import { PostList } from "@/widgets/post/ui/PostList"

const PostManagerPage = () => {
  return (
    <CardLayout header={<PostHeader />}>
      <PostList />
      <PostAddDialog />
      <UserDetailDialog />
      <PostEditDialog />
      <PostDetailDialog />
    </CardLayout>
  )
}

export default PostManagerPage
