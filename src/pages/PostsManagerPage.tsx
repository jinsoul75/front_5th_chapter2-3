import { PostHeader } from "./ui/posts/PostHeader"
import { PostList } from "./ui/posts/PostList"
import { PostManagerLayout } from "./ui/posts/PostManagerLayout"

// layout이 순수하게 ui만 그린다면 로직을 가지고 있는 컴포넌트는 주입을 해준다.
const PostsManager = () => {
  return (
    <PostManagerLayout header={<PostHeader />}>
      <PostList />
    </PostManagerLayout>
  )
}

export default PostsManager
