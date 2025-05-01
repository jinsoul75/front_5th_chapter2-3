import { useEffect } from "react"

import { PostControls } from "./PostControls"
import { usePostListState } from "../model/usePostListState"

import { SEARCH_PARAMS } from "@/features/post/config/searchParams"

import { PostTable } from "@/entity/post/ui/PostTable"

import { Loading } from "@/shared/ui/Loading"
import { Pagination } from "@/shared/ui/Pagination"
import { usePostListData } from "../model/usePostListData"

export type SetSelectedTag = ({ selectedTag }: { selectedTag: string }) => void

// props로 받는것이 없고 이 조합을 이 컴포넌트 자체로 재사용이 가능하다 -> 위젯?

export const PostList = () => {
  const { params, setParams, updateURL } = usePostListState()

  const { posts, isLoading, refetch: onSearch, total, tags } = usePostListData(params)

  const handleResetSkipAndLimit = () => {
    setParams((prev) => ({
      ...prev,
      skip: SEARCH_PARAMS.skip,
      limit: SEARCH_PARAMS.limit,
    }))
  }

  const handleResetFilters = () => {
    setParams((prev) => ({
      ...prev,
      tag: SEARCH_PARAMS.tag,
    }))
    handleResetSkipAndLimit()
    onSearch()
  }

  const handleResetSearchQuery: SetSelectedTag = ({ selectedTag }) => {
    if (selectedTag) {
      setParams((prev) => ({
        ...prev,
        searchQuery: SEARCH_PARAMS.search,
        selectedTag: selectedTag,
      }))
      handleResetSkipAndLimit()
    }
  }

  useEffect(() => {
    updateURL()
  }, [params, updateURL])

  return (
    <div className="flex flex-col gap-4">
      <PostControls
        search={{
          query: params.searchQuery,
          setQuery: (searchQuery) => setParams((prev) => ({ ...prev, searchQuery })),
          onSearch: handleResetFilters,
        }}
        tag={{
          selected: params.selectedTag,
          setSelected: handleResetSearchQuery,
          tags: tags,
          updateURL: updateURL,
        }}
        sort={{
          by: params.sortBy,
          setBy: (sortBy) => setParams((prev) => ({ ...prev, sortBy })),
          order: params.sortOrder,
          setOrder: (sortOrder) => setParams((prev) => ({ ...prev, sortOrder })),
        }}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <PostTable
          posts={posts}
          searchQuery={params.searchQuery}
          selectedTag={params.selectedTag}
          onTagClick={(tag) => setParams((prev) => ({ ...prev, selectedTag: tag }))}
        />
      )}

      <Pagination
        limit={params.limit}
        setLimit={(limit) => setParams((prev) => ({ ...prev, limit }))}
        skip={params.skip}
        setSkip={(skip) => setParams((prev) => ({ ...prev, skip }))}
        total={total || 0}
      />
    </div>
  )
}
