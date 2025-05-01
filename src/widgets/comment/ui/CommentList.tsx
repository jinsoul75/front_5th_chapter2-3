import { useComments } from "@/entity/comment/api/useQuries"
import { Comment } from "@/entity/comment/types/commnetTypes"
import { CommentAddModalButton, CommentItem } from "@/entity/comment/ui"

import { Loading } from "@/shared/ui/Loading"

interface CommentListProps {
  postId: number
  searchQuery: string
}

export const Comments = ({ postId, searchQuery }: CommentListProps) => {
  const { isLoading, data: comments, error } = useComments({ postId })
  console.log("🚀 ~ Comments ~ postId:", postId)

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
        <CommentAddModalButton postId={postId} />
      </div>
      <div className="space-y-1">
        {comments?.map((comment: Comment) => (
          <CommentItem key={comment.id} comment={comment} searchQuery={searchQuery} />
        ))}
      </div>
    </div>
  )
}
