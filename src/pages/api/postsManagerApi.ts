import axios from "axios"
import { Comment, NewComment, NewPost, Post } from "../types/postsManagerTypes"

// Posts related APIs
export const postsApi = {
  // 게시물 목록 가져오기
  fetchPosts: async (limit: number, skip: number, searchQuery: string, sortBy: string, sortOrder: string, selectedTag: string) => {
    const { data } = await axios.get(`/api/posts`, { params: { limit, skip, searchQuery, sortBy, sortOrder, selectedTag } })
    const { posts } = data
    return posts
  },

  // 게시물 검색
  searchPosts: async (query: string) => {
    const { data } = await axios.get("/api/posts/search", { params: { q: query } })
    return data
  },

  // 태그별 게시물
  fetchPostsByTag: async (tag: string) => {
    const { data } = await axios.get(`/api/posts/tag/${tag}`)
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
  deletePost: async (id: number) => {
    const { data } = await axios.delete(`/api/posts/${id}`)
    return data
  },

  // 태그 가져오기
  fetchTags: async () => {
    const { data } = await axios.get("/api/posts/tags")
    return data
  },
}

// Comments related APIs
export const commentsApi = {
  // 댓글 목록 가져오기
  fetchComments: async (postId: number) => {
    const { data } = await axios.get(`/api/comments/post/${postId}`)
    return data
  },

  // 댓글 추가
  addComment: async (newComment: NewComment) => {
    const { data } = await axios.post("/api/comments/add", newComment)
    return data
  },

  // 댓글 수정
  updateComment: async (comment: Comment) => {
    const { data } = await axios.put(`/api/comments/${comment.id}`, { body: comment.body })
    return data
  },

  // 댓글 삭제
  deleteComment: async (id: number) => {
    const { data } = await axios.delete(`/api/comments/${id}`)
    return data
  },

  // 댓글 좋아요
  likeComment: async (id: number, likes: number) => {
    const { data } = await axios.patch(`/api/comments/${id}`, { likes })
    return data
  },
}

// Users related APIs
export const usersApi = {
  // 사용자 목록 가져오기
  fetchUsers: async () => {
    const { data } = await axios.get("/api/users", { params: { limit: 0, select: "username,image" } })
    return data
  },

  // 사용자 상세 정보
  fetchUserDetail: async (userId: number) => {
    const { data } = await axios.get(`/api/users/${userId}`)
    return data
  },
}
