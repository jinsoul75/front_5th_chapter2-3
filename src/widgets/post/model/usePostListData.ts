import { usePosts } from "@/entity/post/api/useQuries"

import { useTags } from "@/entity/post/api/useQuries"

interface PostListDataParams {
  skip: number
  limit: number
  sortBy: string
  sortOrder: string
  searchQuery: string
}

export const usePostListData = (params: PostListDataParams) => {
  const { data: tags } = useTags()
  const { data: posts, isLoading, refetch, total } = usePosts(params)

  return {
    posts,
    tags,
    isLoading,
    total,
    refetch,
  }
}
