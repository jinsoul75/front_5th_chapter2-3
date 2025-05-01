import { axiosInstance } from "@/shared/api/axiosInstance"
import { NewPost, Post } from "@/entity/post/types/postTypes"

export const postsApi = {
  // 게시물 목록 가져오기
  fetchPosts: async (limit: number, skip: number, sortBy: string, sortOrder: string) => {
    try {
      const { data } = await axiosInstance(`/posts`, { params: { limit, skip, sortBy, sortOrder } })
      return data
    } catch (error) {
      console.error("게시물 목록 가져오기 오류:", error)
      throw error
    }
  },

  // 게시물 검색
  searchPosts: async (query: string, limit: number, skip: number, sortBy: string, sortOrder: string) => {
    try {
      const { data } = await axiosInstance("/posts/search", { params: { q: query, limit, skip, sortBy, sortOrder } })
      return data
    } catch (error) {
      console.error("게시물 검색 오류:", error)
      throw error
    }
  },

  // 태그별 게시물
  fetchPostsByTag: async (tag: string, limit: number, skip: number, sortBy: string, sortOrder: string) => {
    try {
      const { data } = await axiosInstance(`/posts/tag/${tag}`, { params: { limit, skip, sortBy, sortOrder } })
      return data
    } catch (error) {
      console.error("태그별 게시물 가져오기 오류:", error)
      throw error
    }
  },

  // 게시물 추가
  addPost: async (newPost: NewPost) => {
    try {
      const { data } = await axiosInstance.post("/posts/add", newPost)
      return data
    } catch (error) {
      console.error("게시물 추가 오류:", error)
      throw error
    }
  },

  // 게시물 수정
  updatePost: async (post: Post) => {
    try {
      const { data } = await axiosInstance.put(`/posts/${post.id}`, post)
      return data
    } catch (error) {
      console.error("게시물 수정 오류:", error)
      throw error
    }
  },

  // 게시물 삭제
  deletePost: async (id: number) => {
    try {
      const { data } = await axiosInstance.delete(`/posts/${id}`)
      return data
    } catch (error) {
      console.error("게시물 삭제 오류:", error)
      throw error
    }
  },

  // 태그 가져오기
  fetchTags: async () => {
    try {
      const { data } = await axiosInstance("/posts/tags")
      return data
    } catch (error) {
      console.error("태그 가져오기 오류:", error)
      throw error
    }
  },
}
