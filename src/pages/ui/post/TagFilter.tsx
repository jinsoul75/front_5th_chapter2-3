import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"

interface TagFilterProps {
  selectedTag: string
  setSelectedTag: (value: string) => void
  tags: {
    url: string
    slug: string
  }[]
  fetchPostsByTag: (value: string) => void
  updateURL: () => void
}

export const TagFilter = ({ selectedTag, setSelectedTag, tags, fetchPostsByTag, updateURL }: TagFilterProps) => {
  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        setSelectedTag(value)
        fetchPostsByTag(value)
        updateURL()
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
