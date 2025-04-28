import { PostManagerLayout, PostHeader, PostList } from "./ui/post"

const PostsManager = () => {
  return (
    <PostManagerLayout header={<PostHeader />}>
      <PostList />
    </PostManagerLayout>
  )
}

export default PostsManager
