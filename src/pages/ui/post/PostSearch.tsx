import { Tag } from "../../types/postsManagerTypes"
import { SearchInput } from "./SearchInput"
import { SortControls } from "./SortControls"
import { TagFilter } from "./TagFilter"

interface PostSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  onSearch: () => void
  selectedTag: string
  setSelectedTag: (tag: string) => void
  tags: Tag[]
  updateURL: () => void
  sortBy: string
  setSortBy: (sortBy: string) => void
  sortOrder: string
  setSortOrder: (sortOrder: string) => void
}

export const PostSearch = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  selectedTag,
  setSelectedTag,
  tags,
  updateURL,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: PostSearchProps) => {
  return (
    <div className="flex gap-4">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />
      <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} updateURL={updateURL} />
      <SortControls sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  )
}
