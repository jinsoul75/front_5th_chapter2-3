import { useState } from "react"
import { PostPagination } from "./PostPagination"
import { PostSearch } from "./PostSeacrh"
import { PostTable } from "./PostTable"
import { Loading } from "../common/Loading"

export const PostList = () => {
  // 얘는 추후 탄스택 쿼리로 변경
  const [loading, setLoading] = useState(false)
  
  // 이 컴포넌트에서는 query를 공유해야한다.
  // const { data, isLoading } = useGetPostsQuery(query)

  return (
    <div className="flex flex-col gap-4">
      {/* 검색 및 필터 컨트롤 */}
      <PostSearch />

      {/* 게시물 테이블 */}
      {loading ? <Loading /> : <PostTable />}

      {/* 페이지네이션 */}
      <PostPagination />
    </div>
  )
}
