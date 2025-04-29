import { PostManagerLayout, PostHeader, PostList, PostAddDialog, PostEditDialog, PostDetail } from "./ui/post"
import { UserDetailDialog } from "./ui/user/UserDetailDialog"

const PostsManager = () => {
  return (
    <PostManagerLayout header={<PostHeader />}>
      <PostList />
      <PostAddDialog />
      <UserDetailDialog />
      <PostEditDialog />
      <PostDetail />
    </PostManagerLayout>
  )
}

export default PostsManager
