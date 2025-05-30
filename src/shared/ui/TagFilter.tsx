import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui"
import { SetSelectedTag } from "@/widgets/post/ui/PostList"

interface TagFilterProps {
  selectedTag: string
  setSelectedTag: SetSelectedTag
  tags: {
    url: string
    slug: string
  }[]
  updateURL: () => void
}

export const TagFilter = ({ selectedTag, setSelectedTag, tags, updateURL }: TagFilterProps) => {
  const handleValueChange = (value: string) => {
    setSelectedTag({ selectedTag: value })
    updateURL()
  }

  return (
    <Select value={selectedTag} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags?.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
