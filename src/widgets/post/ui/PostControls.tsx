import { SetSelectedTag } from "./PostList"

import { Tag } from "@/entity/post/types/postTypes"

import { POST_SORT_OPTIONS, POST_SORT_ORDER_OPTIONS } from "@/features/post/constants/sortOptions"

import { SearchInput, SortControls, TagFilter } from "@/shared/ui"

interface PostControlsProps {
  search: {
    query: string
    setQuery: (q: string) => void
    onSearch: () => void
  }
  tag: {
    selected: string
    setSelected: SetSelectedTag
    tags: Tag[]
    updateURL: () => void
  }
  sort: {
    by: string
    setBy: (by: string) => void
    order: string
    setOrder: (order: string) => void
  }
}

export const PostControls = ({ search, tag, sort }: PostControlsProps) => {
  return (
    <div className="flex gap-4">
      <SearchInput
        searchQuery={search.query}
        setSearchQuery={search.setQuery}
        onSearch={search.onSearch}
        placeholder="게시물 검색..."
      />
      <TagFilter
        selectedTag={tag.selected}
        setSelectedTag={tag.setSelected}
        tags={tag.tags}
        updateURL={tag.updateURL}
      />
      <SortControls
        sortBy={sort.by}
        setSortBy={sort.setBy}
        sortOrder={sort.order}
        setSortOrder={sort.setOrder}
        sortOptions={POST_SORT_OPTIONS}
        sortOrderOptions={POST_SORT_ORDER_OPTIONS}
      />
    </div>
  )
}
