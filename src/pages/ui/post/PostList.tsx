import { useCallback, useEffect, useState } from "react"
import { PostSearch } from "./PostSearch"
import { usePosts, useTags } from "../../hooks/queries"
import { Loading } from "../common/Loading"
import { PostTable } from "./PostTable"
import { useNavigate } from "react-router-dom"
import { Pagination } from "../common/Pagination"
import { SEARCH_PARAMS } from "../../config/searchParams"

export const PostList = () => {
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)

  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || SEARCH_PARAMS.skip))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || SEARCH_PARAMS.limit))
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || SEARCH_PARAMS.sortBy)
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || SEARCH_PARAMS.sortOrder)
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || SEARCH_PARAMS.search)
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || SEARCH_PARAMS.tag)

  const { data: tags } = useTags()

  const {
    data: posts,
    isLoading,
    refetch: onSearch,
    total,
  } = usePosts({ skip, limit, sortBy, sortOrder, searchQuery, selectedTag })

  const updateURL = useCallback(() => {
    const params = new URLSearchParams()
    if (skip) params.set("skip", skip.toString())
    if (limit) params.set("limit", limit.toString())
    if (searchQuery) params.set("search", searchQuery)
    if (sortBy) params.set("sortBy", sortBy)
    if (sortOrder) params.set("sortOrder", sortOrder)
    if (selectedTag) params.set("tag", selectedTag)
    navigate(`?${params.toString()}`)
  }, [navigate, selectedTag, searchQuery, sortBy, sortOrder, skip, limit])

  const handleResetParams = () => {
    setSortBy(SEARCH_PARAMS.sortBy)
    setSortOrder(SEARCH_PARAMS.sortOrder)
    setSkip(parseInt(SEARCH_PARAMS.skip))
  }

  const handleResetFilters = () => {
    setSelectedTag(SEARCH_PARAMS.tag)
    handleResetParams()
    onSearch()
  }

  const handleResetSearchQuery = ({ selectedTag }: { selectedTag?: string }) => {
    if (selectedTag) {
      setSelectedTag(selectedTag)
      setSearchQuery(SEARCH_PARAMS.search)
      handleResetParams()
    }
  }

  useEffect(() => {
    updateURL()
  }, [skip, limit, searchQuery, sortBy, sortOrder, selectedTag, updateURL])

  return (
    <div className="flex flex-col gap-4">
      {/* 검색 및 필터 컨트롤 */}
      <PostSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedTag={handleResetSearchQuery}
        onSearch={handleResetFilters}
        selectedTag={selectedTag}
        tags={tags}
        updateURL={updateURL}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

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
      <Pagination limit={limit} setLimit={setLimit} skip={skip} setSkip={setSkip} total={total || 0} />
    </div>
  )
}
