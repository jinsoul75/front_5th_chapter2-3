import axios from "axios"
import { NewPost, Post } from "@/entity/post/types/postTypes"

export const postsApi = {
  // 게시물 목록 가져오기
  fetchPosts: async (limit: number, skip: number, sortBy: string, sortOrder: string) => {
    const { data } = await axios(`/api/posts`, { params: { limit, skip, sortBy, sortOrder } })
    return data
  },

  // 게시물 검색
  searchPosts: async (query: string, limit: number, skip: number, sortBy: string, sortOrder: string) => {
    const { data } = await axios("/api/posts/search", { params: { q: query, limit, skip, sortBy, sortOrder } })
    return data
  },

  // 태그별 게시물
  fetchPostsByTag: async (tag: string, limit: number, skip: number, sortBy: string, sortOrder: string) => {
    const { data } = await axios(`/api/posts/tag/${tag}`, { params: { limit, skip, sortBy, sortOrder } })
    return data
  },

  // 게시물 추가
  addPost: async (newPost: NewPost) => {
    const { data } = await axios.post("/api/posts/add", newPost)
    return data
  },

  // 게시물 수정
  updatePost: async (post: Post) => {
    const { data } = await axios.put(`/api/posts/${post.id}`, post)
    return data
  },

  // 게시물 삭제
  deletePost: async (id: string) => {
    const { data } = await axios.delete(`/api/posts/${id}`)
    return data
  },

  // 태그 가져오기
  fetchTags: async () => {
    const { data } = await axios("/api/posts/tags")
    return data
  },
}
