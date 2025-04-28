import axios from "axios"
import { Comment, NewComment, NewPost, Post } from "../types/postsManagerTypes"

// 게시물 목록 가져오기
export async function fetchPostsApi(limit: number, skip: number) {
  const { data } = await axios.get(`/api/posts`, { params: { limit, skip } })
  return data
}

// 사용자 목록 가져오기
export async function fetchUsersApi() {
  const { data } = await axios.get("/api/users", { params: { limit: 0, select: "username,image" } })
  return data
}

// 태그 가져오기
export async function fetchTagsApi() {
  const { data } = await axios.get("/api/posts/tags")
  return data
}

// 게시물 검색
export async function searchPostsApi(query: string) {
  const { data } = await axios.get("/api/posts/search", { params: { q: query } })
  return data
}

// 태그별 게시물
export async function fetchPostsByTagApi(tag: string) {
  const { data } = await axios.get(`/api/posts/tag/${tag}`)
  return data
}

// 게시물 추가
export async function addPostApi(newPost: NewPost) {
  const { data } = await axios.post("/api/posts/add", newPost)
  return data
}

// 게시물 수정
export async function updatePostApi(post: Post) {
  const { data } = await axios.put(`/api/posts/${post.id}`, post)
  return data
}

// 게시물 삭제
export async function deletePostApi(id: number) {
  const { data } = await axios.delete(`/api/posts/${id}`)
  return data
}

// 댓글 관련 API도 같은 방식으로 분리
export async function fetchCommentsApi(postId: number) {
  const { data } = await axios.get(`/api/comments/post/${postId}`)
  return data
}

export async function addCommentApi(newComment: NewComment) {
  const { data } = await axios.post("/api/comments/add", newComment)
  return data
}

export async function updateCommentApi(comment: Comment) {
  const { data } = await axios.put(`/api/comments/${comment.id}`, { body: comment.body })
  return data
}

export async function deleteCommentApi(id: number) {
  const { data } = await axios.delete(`/api/comments/${id}`)
  return data
}

export async function likeCommentApi(id: number, likes: number) {
  const { data } = await axios.patch(`/api/comments/${id}`, { likes })
  return data
}

// 사용자 상세 정보
export async function fetchUserDetailApi(userId: number) {
  const { data } = await axios.get(`/api/users/${userId}`)
  return data
}
