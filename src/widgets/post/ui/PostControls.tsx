import { Tag } from "@/pages/types/postsManagerTypes"
import { SearchInput } from "@/shared/ui/SearchInput"
import { SortControls } from "@/shared/ui/SortControls"
import { TagFilter } from "@/shared/ui/TagFilter"
import { SetSelectedTag } from "./PostList"
import { POST_SORT_OPTIONS, POST_SORT_ORDER_OPTIONS } from "../../../features/post/constants/sortOptions"

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
