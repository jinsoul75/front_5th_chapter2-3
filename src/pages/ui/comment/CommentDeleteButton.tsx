import { Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"

export const CommentDeleteButton = () => {
  return (
    <Button variant="ghost" size="sm" onClick={() => deleteComment(comment.id, postId)}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}
