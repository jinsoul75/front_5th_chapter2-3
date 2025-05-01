import { Trash2 } from "lucide-react"

import { Comment } from "@/entity/comment/types/commnetTypes"
import { useDeleteComment } from "@/entity/comment/api/useQuries"

import { Button } from "@/shared/ui"

export const CommentDeleteButton = ({ comment }: { comment: Comment }) => {
  const { mutate: deleteComment } = useDeleteComment()

  return (
    <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}
