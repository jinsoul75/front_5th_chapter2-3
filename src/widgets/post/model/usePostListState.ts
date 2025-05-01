import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

import { SEARCH_PARAMS } from "@/features/post/config/searchParams"

export const usePostListState = () => {
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)

  const [params, setParams] = useState({
    skip: Number(queryParams.get("skip")) || SEARCH_PARAMS.skip,
    limit: Number(queryParams.get("limit")) || SEARCH_PARAMS.limit,
    sortBy: queryParams.get("sortBy") || SEARCH_PARAMS.sortBy,
    sortOrder: queryParams.get("sortOrder") || SEARCH_PARAMS.sortOrder,
    searchQuery: queryParams.get("search") || SEARCH_PARAMS.search,
    selectedTag: queryParams.get("tag") || SEARCH_PARAMS.tag,
  })

  const updateURL = useCallback(() => {
    const urlParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value) urlParams.set(key, value.toString())
    })
    navigate(`?${urlParams.toString()}`)
  }, [params, navigate])

  return {
    params,
    setParams,
    updateURL,
  }
}
