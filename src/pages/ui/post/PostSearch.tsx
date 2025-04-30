import { Tag } from "../../types/postsManagerTypes"
import { SearchInput } from "./SearchInput"
import { SortControls } from "./SortControls"
import { TagFilter } from "./TagFilter"

interface PostSearchProps {
  setSearchQuery: (searchQuery: string) => void
  setSelectedTag: ({ selectedTag, setSelectedTag }: { selectedTag?: string; setSelectedTag?: string }) => void
  searchQuery: string
  onSearch: () => void
  selectedTag: string
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
