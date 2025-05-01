import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { PostControls } from "./PostControls"

import { SEARCH_PARAMS } from "@/features/post/config/searchParams"
import { usePostTableActions } from "@/features/post/hooks/usePostTableActions"

import { usePosts, useTags } from "@/entity/post/api/useQuries"
import { PostTable } from "@/entity/post/ui/PostTable"

import { Loading } from "@/shared/ui/Loading"
import { Pagination } from "@/shared/ui/Pagination"

export type SetSelectedTag = ({ selectedTag }: { selectedTag: string }) => void

// props로 받는것이 없고 이 조합을 이 컴포넌트 자체로 재사용이 가능하다 -> 위젯?

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

  const { handleOpenUserModal, handleOpenPostDetail, handleOpenEditDialog, handleDeletePost } = usePostTableActions()

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

  const handleResetSearchQuery: SetSelectedTag = ({ selectedTag }) => {
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
      <PostControls
        search={{
          query: searchQuery,
          setQuery: setSearchQuery,
          onSearch: handleResetFilters,
        }}
        tag={{
          selected: selectedTag,
          setSelected: handleResetSearchQuery,
          tags: tags,
          updateURL: updateURL,
        }}
        sort={{
          by: sortBy,
          setBy: setSortBy,
          order: sortOrder,
          setOrder: setSortOrder,
        }}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <PostTable
          posts={posts}
          searchQuery={searchQuery}
          selectedTag={selectedTag}
          onTagClick={setSelectedTag}
          onUserClick={handleOpenUserModal}
          onPostClick={handleOpenPostDetail}
          onEditClick={handleOpenEditDialog}
          onDeleteClick={handleDeletePost}
        />
      )}

      <Pagination limit={limit} setLimit={setLimit} skip={skip} setSkip={setSkip} total={total || 0} />
    </div>
  )
}
