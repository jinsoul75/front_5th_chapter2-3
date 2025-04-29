import { Loading } from "../common/Loading"
import { CommentAddButton } from "./CommentAddButton"
import { CommentDeleteButton } from "./CommentDeleteButton"
import { CommentEditButton } from "./CommentEditButton"
import { CommentLikeButton } from "./CommentLikeButton"
import { highlightText } from "../../utils/highlightText"
import { useComments } from "../../hooks/queries"
import { Comment } from "../../types/postsManagerTypes"

export const Comments = ({ postId, searchQuery }: { postId: number; searchQuery: string }) => {
  const { isLoading, data: comments, error } = useComments({ postId })

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div className="mt-2 text-sm text-red-500">댓글을 불러오는 중 오류가 발생했습니다.</div>
  }

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">댓글</h3>
        <CommentAddButton postId={postId} />
      </div>
      <div className="space-y-1">
        {comments?.map((comment: Comment) => (
          <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
            <div className="flex items-center space-x-2 overflow-hidden">
              <span className="font-medium truncate">{comment.user.username}:</span>
              <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CommentLikeButton comment={comment} likes={comment.likes} />
              <CommentEditButton comment={comment} />
              <CommentDeleteButton comment={comment} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
