import { ThumbsUp } from "lucide-react"

import { Comment } from "@/entity/comment/types/commnetTypes"
import { useLikeComment } from "@/entity/comment/api/useQuries"

import { Button } from "@/shared/ui"

export const CommentLikeButton = ({ comment, likes }: { comment: Comment; likes: number }) => {
  const { mutate: likeComment } = useLikeComment()

  return (
    <Button variant="ghost" size="sm" onClick={() => likeComment({ commentId: comment.id, likes })}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{comment.likes}</span>
    </Button>
  )
}
