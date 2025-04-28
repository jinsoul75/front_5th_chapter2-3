import { Comment, NewComment, NewPost, Post } from "../types/postsManagerTypes"

// 게시물 목록 가져오기
export async function fetchPostsApi(limit: number, skip: number) {
  const response = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
  return response.json()
}

// 사용자 목록 가져오기
export async function fetchUsersApi() {
  const response = await fetch("/api/users?limit=0&select=username,image")
  return response.json()
}

// 태그 가져오기
export async function fetchTagsApi() {
  const response = await fetch("/api/posts/tags")
  return response.json()
}

// 게시물 검색
export async function searchPostsApi(query: string) {
  const response = await fetch(`/api/posts/search?q=${query}`)
  return response.json()
}

// 태그별 게시물
export async function fetchPostsByTagApi(tag: string) {
  const response = await fetch(`/api/posts/tag/${tag}`)
  return response.json()
}

// 게시물 추가
export async function addPostApi(newPost: NewPost) {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
  return response.json()
}

// 게시물 수정
export async function updatePostApi(post: Post) {
  const response = await fetch(`/api/posts/${post.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
  return response.json()
}

// 게시물 삭제
export async function deletePostApi(id: number) {
  return fetch(`/api/posts/${id}`, { method: "DELETE" })
}

// 댓글 관련 API도 같은 방식으로 분리
export async function fetchCommentsApi(postId: number) {
  const response = await fetch(`/api/comments/post/${postId}`)
  return response.json()
}

export async function addCommentApi(newComment: NewComment) {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  })
  return response.json()
}

export async function updateCommentApi(comment: Comment) {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ body: comment.body }),
  })
  return response.json()
}

export async function deleteCommentApi(id: number) {
  return fetch(`/api/comments/${id}`, { method: "DELETE" })
}

export async function likeCommentApi(id: number, likes: number) {
  const response = await fetch(`/api/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ likes }),
  })
  return response.json()
}

// 사용자 상세 정보
export async function fetchUserDetailApi(userId: number) {
  const response = await fetch(`/api/users/${userId}`)
  return response.json()
}
