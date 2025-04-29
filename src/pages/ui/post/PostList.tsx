import { useState } from "react"
import { PostSearch } from "./PostSearch"
import { usePosts } from "../../hooks/queries"
import { Loading } from "../common/Loading"
import { PostTable } from "./PostTable"
import { useNavigate } from "react-router-dom"

export const PostList = () => {
  // 얘는 추후 탄스택 쿼리로 변경
  const queryParams = new URLSearchParams(location.search)

  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"))
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "")
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc")
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "")

  const {
    data: posts,
    isLoading,
    refetch: onSearch,
  } = usePosts({ skip, limit, searchQuery, sortBy, sortOrder, selectedTag })

  const navigate = useNavigate()

  const updateURL = () => {
    const params = new URLSearchParams()
    if (skip) params.set("skip", skip.toString())
    if (limit) params.set("limit", limit.toString())
    if (searchQuery) params.set("search", searchQuery)
    if (sortBy) params.set("sortBy", sortBy)
    if (sortOrder) params.set("sortOrder", sortOrder)
    if (selectedTag) params.set("tag", selectedTag)
    navigate(`?${params.toString()}`)
  }
  
  return (
    <div className="flex flex-col gap-4">
      {/* 검색 및 필터 컨트롤 */}
      <PostSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />

      {/* 게시물 테이블 */}
      {isLoading ? (
        <Loading />
      ) : (
        <PostTable
          posts={posts}
          searchQuery={searchQuery}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          updateURL={updateURL}
        />
      )}

      {/* 페이지네이션 */}
      {/* <Pagination limit={limit} setLimit={setLimit} skip={skip} setSkip={setSkip} total={total} /> */}
    </div>
  )
}
