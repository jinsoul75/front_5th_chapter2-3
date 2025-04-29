import { Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useDeleteComment } from "../../hooks/queries"
import { Comment } from "../../types/postsManagerTypes"

export const CommentDeleteButton = ({ comment }: { comment: Comment }) => {
  const { mutate: deleteComment } = useDeleteComment()

  return (
    <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}
