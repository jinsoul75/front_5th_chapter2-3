import { Trash2, Edit2, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react"
import { TableBody, TableCell, Button, Table, TableHeader, TableRow, TableHead } from "@/shared/ui"
import { highlightText } from "@/shared/utils/highlightText"
import { Post } from "../types/postTypes"

interface PostTableProps {
  posts: Post[]
  searchQuery: string
  selectedTag: string
  onTagClick: (tag: string) => void
  onUserClick: (userId: number) => void
  onPostClick: (post: Post) => void
  onEditClick: (post: Post) => void
  onDeleteClick: (postId: string) => void
}

// 테이블을 보여주는 UI 이면서
// 모달을 컨트롤하면서
// 게시물 삭제를 한다.
// -> 분리해야하나?

export const PostTable = ({
  posts,
  searchQuery,
  selectedTag,
  onTagClick,
  onUserClick,
  onPostClick,
  onEditClick,
  onDeleteClick,
}: PostTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="w-[150px]">작성자</TableHead>
          <TableHead className="w-[150px]">반응</TableHead>
          <TableHead className="w-[150px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>{post.id}</TableCell>
            <TableCell>
              <div className="space-y-1">
                <div>{highlightText(post.title, searchQuery)}</div>

                <div className="flex flex-wrap gap-1">
                  {post.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
                        selectedTag === tag
                          ? "text-white bg-blue-500 hover:bg-blue-600"
                          : "text-blue-800 bg-blue-100 hover:bg-blue-200"
                      }`}
                      onClick={() => {
                        onTagClick(tag)
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onUserClick(post.userId || 0)}>
                <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
                <span>{post.author?.username}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.reactions?.likes || 0}</span>
                <ThumbsDown className="w-4 h-4" />
                <span>{post.reactions?.dislikes || 0}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => onPostClick(post)}>
                  <MessageSquare className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    onEditClick(post)
                  }}
                >
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => onDeleteClick(post.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
