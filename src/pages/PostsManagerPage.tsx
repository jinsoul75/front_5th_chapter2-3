import { PostManagerLayout, PostHeader, PostList, PostAddDialog, PostEditDialog } from "./ui/post"
import { UserDetailDialog } from "./ui/user/UserDetailDialog"

const PostsManager = () => {
  return (
    <PostManagerLayout header={<PostHeader />}>
      <PostList />
      <PostAddDialog />
      <UserDetailDialog />
      <PostEditDialog />
    </PostManagerLayout>
  )
}

export default PostsManager
