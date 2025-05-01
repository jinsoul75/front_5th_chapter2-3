import { Comment } from "../types/commnetTypes"
import { CommentActions } from "./CommentActions"

import { highlightText } from "@/shared/utils/highlightText"

export const CommentItem = ({ comment, searchQuery }: { comment: Comment; searchQuery: string }) => {
  return (
    <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
      <div className="flex items-center space-x-2 overflow-hidden">
        <span className="font-medium truncate">{comment.user.username}:</span>
        <span className="truncate">{highlightText(comment.body, searchQuery)}</span>
      </div>
      <div className="flex items-center space-x-1">
        <CommentActions comment={comment} />
      </div>
    </div>
  )
}
