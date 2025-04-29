import { PostManagerLayout, PostHeader, PostList, PostAddDialog } from "./ui/post"
import { UserDetailDialog } from "./ui/user/UserDetailDialog"

const PostsManager = () => {
  return (
    <PostManagerLayout header={<PostHeader />}>
      <PostList />
      <PostAddDialog />
      <UserDetailDialog />
    </PostManagerLayout>
  )
}

export default PostsManager
