import { ThumbsUp } from "lucide-react"
import { Button } from "../../../shared/ui"
import { Comment } from "../../types/postsManagerTypes"
import { useLikeComment } from "../../../features/post/hooks/queries"

export const CommentLikeButton = ({ comment, likes }: { comment: Comment; likes: number }) => {
  const { mutate: likeComment } = useLikeComment()

  return (
    <Button variant="ghost" size="sm" onClick={() => likeComment({ commentId: comment.id, likes })}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{comment.likes}</span>
    </Button>
  )
}
