import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui"

interface SortControlsProps {
  sortBy: string
  setSortBy: (value: string) => void
  sortOrder: string
  setSortOrder: (value: string) => void
  sortOptions: { label: string; value: string }[]
  sortOrderOptions: { label: string; value: string }[]
}

// 정렬기준과 정렬순서를 분리시킬 필요가 있을까?
// 정렬기준이 여러개가 된다면? -> 복수선택 기준으로 바뀐다면 (UI변경) -> 분리하는게 맞다.

export const SortControls = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  sortOptions,
  sortOrderOptions,
}: SortControlsProps) => {
  const handleSortByChange = (value: string) => {
    setSortBy(value)
  }

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value)
  }

  return (
    <>
      <Select value={sortBy} onValueChange={handleSortByChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="정렬 기준" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={sortOrder} onValueChange={handleSortOrderChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="정렬 순서" />
        </SelectTrigger>
        <SelectContent>
          {sortOrderOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
