// URL 업데이트 함수
// get요청을 하는 엔드포인트에 관여하니까 api 세그먼트인가?
// 하지만 함수의 성격은 URL 파라미터 관리라는 일반적인 유틸리티 기능
// 파라미터를 만들 뿐 API 호출과 직접적인 관련이 없음
// src/entities/post/types/postParams.ts
export interface PostUrlParams {
  skip?: number
  limit?: number
  search?: string
  sortBy?: "id" | "title" | "reactions"
  sortOrder?: "asc" | "desc"
  tag?: string
}

// // src/entities/post/lib/updatePostUrlParams.ts
import { PostUrlParams } from "../types/postParams"

export const updatePostUrlParams = (params: PostUrlParams, navigate: (path: string) => void) => {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, value.toString())
    }
  })

  navigate(`?${searchParams.toString()}`)
}
