import { Post } from "../types/postTypes"

import { PostTableContent } from "@/entity/post/ui/PostTableContent"

import { TableBody, Table, TableHeader, TableRow, TableHead } from "@/shared/ui"

interface PostTableProps {
  posts: Post[]
  searchQuery: string
  selectedTag: string
  onTagClick: (tag: string) => void
}

// 테이블을 보여주는 UI 이면서
// 모달을 컨트롤하면서
// 게시물 삭제를 한다.
// -> 분리해야하나?

export const PostTable = ({ posts, searchQuery, selectedTag, onTagClick }: PostTableProps) => {
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
            <PostTableContent post={post} searchQuery={searchQuery} selectedTag={selectedTag} onTagClick={onTagClick} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
