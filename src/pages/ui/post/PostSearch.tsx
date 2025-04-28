import { SearchInput } from "./SearchInput"
import { SortControls } from "./SortControls"
import { TagFilter } from "./TagFilter"

export const PostSearch = () => {
  return (
    <div className="flex gap-4">
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={onSearch} />
      <TagFilter
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        tags={tags}
        fetchPostsByTag={fetchPostsByTag}
        updateURL={updateURL}
      />
      <SortControls sortBy={sortBy} setSortBy={setSortBy} sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  )
}
