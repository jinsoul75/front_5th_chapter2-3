import { useNavigate } from "react-router-dom"

interface UpdateURLProps {
  skip: number
  limit: number
  searchQuery: string
  sortBy: string
  sortOrder: string
  selectedTag: string
}

export const useUpdateURL = ({ skip, limit, searchQuery, sortBy, sortOrder, selectedTag }: UpdateURLProps) => {
  const navigate = useNavigate()

  const updateURL = () => {
    const params = new URLSearchParams()
    if (skip) params.set("skip", skip.toString())
    if (limit) params.set("limit", limit.toString())
    if (searchQuery) params.set("search", searchQuery)
    if (sortBy) params.set("sortBy", sortBy)
    if (sortOrder) params.set("sortOrder", sortOrder)
    if (selectedTag) params.set("tag", selectedTag)
    navigate(`?${params.toString()}`)
  }

  return { updateURL }
}
