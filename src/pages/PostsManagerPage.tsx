import { PostManagerLayout, PostHeader, PostList, PostAddDialog } from "./ui/post"

const PostsManager = () => {
  return (
    <PostManagerLayout header={<PostHeader />}>
      {/* <PostList /> */}
      <PostAddDialog />
    </PostManagerLayout>
  )
}

export default PostsManager
