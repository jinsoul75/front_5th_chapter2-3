import { SearchInput } from "./SearchInput"
import { SortControls } from "./SortControls"
import { TagFilter } from "./TagFilter"

export const PostSearch = () => {
  return (
    <div className="flex gap-4">
      <SearchInput />
      <TagFilter />
      <SortControls />
    </div>
  )
}
