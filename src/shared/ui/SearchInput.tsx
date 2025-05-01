import { Search } from "lucide-react"
import { Input } from "@/shared/ui"

interface SearchInputProps {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
  onSearch: () => void
  placeholder?: string
}

export const SearchInput = ({ searchQuery, setSearchQuery, onSearch, placeholder }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          className="pl-8"
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  )
}
