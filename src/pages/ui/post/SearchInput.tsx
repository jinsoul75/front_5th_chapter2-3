import { Search } from "lucide-react"
import { Input } from "../../../shared/ui"

interface SearchInputProps {
  searchQuery: string
  setSearchQuery: (value: string) => void
  onSearch: () => void
}

export const SearchInput = ({ searchQuery, setSearchQuery, onSearch }: SearchInputProps) => {
  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="게시물 검색..."
          className="pl-8"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onSearch()}
        />
      </div>
    </div>
  )
}
