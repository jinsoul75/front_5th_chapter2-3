import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Comment, NewComment, Tag, User } from "../types/postsManagerTypes"
import { NewPost } from "../types/postsManagerTypes"
import { Post } from "../types/postsManagerTypes"
import {
  fetchPostsApi,
  fetchUsersApi,
  fetchTagsApi,
  searchPostsApi,
  fetchPostsByTagApi,
  addPostApi,
  updatePostApi,
  deletePostApi,
  fetchCommentsApi,
  addCommentApi,
  updateCommentApi,
  deleteCommentApi,
  likeCommentApi,
  fetchUserDetailApi,
} from "../api/postsManagerApi"

export const usePostsManagerState = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  // 상태 관리
  const [posts, setPosts] = useState<Post[]>([])
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"))
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "")
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [newPost, setNewPost] = useState<NewPost>({
    title: "",
    body: "",
    userId: 1,
  })
  const [loading, setLoading] = useState(false)
  const [tags, setTags] = useState<Tag[]>([])
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "")
  const [comments, setComments] = useState<Record<number, Comment[]>>({})
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)
  const [newComment, setNewComment] = useState<NewComment>({
    body: "",
    postId: 0,
  })
  const [showAddCommentDialog, setShowAddCommentDialog] = useState(false)
  const [showEditCommentDialog, setShowEditCommentDialog] = useState(false)
  const [showPostDetailDialog, setShowPostDetailDialog] = useState(false)
  const [showUserModal, setShowUserModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  // URL 업데이트 함수
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

  // 게시물 가져오기
  const fetchPosts = async () => {
    setLoading(true)
    try {
      const postsData = await fetchPostsApi(limit, skip)
      const usersData = await fetchUsersApi()

      const { total, posts } = postsData
      const postsWithUsers = posts.map((post: Post) => ({
        ...post,
        author: usersData.users.find((user: User) => user.id === post.userId),
      }))

      setPosts(postsWithUsers)
      setTotal(total)
    } catch (error) {
      console.error("게시물 가져오기 오류:", error)
    }
    setLoading(false)
  }

  // 태그 가져오기
  const fetchTags = async () => {
    try {
      const data = await fetchTagsApi()
      setTags(data)
    } catch (error) {
      console.error("태그 가져오기 오류:", error)
    }
  }

  // 게시물 검색
  const searchPosts = async () => {
    if (!searchQuery) {
      fetchPosts()
      return
    }
    setLoading(true)
    try {
      const data = await searchPostsApi(searchQuery)
      const { total, posts } = data
      setPosts(posts)
      setTotal(total)
    } catch (error) {
      console.error("게시물 검색 오류:", error)
    }
    setLoading(false)
  }

  // 태그별 게시물 가져오기
  const fetchPostsByTag = async (tag: string) => {
    if (!tag || tag === "all") {
      fetchPosts()
      return
    }
    setLoading(true)
    try {
      const postsData = await fetchPostsByTagApi(tag)
      const usersData = await fetchUsersApi()

      const { total, posts } = postsData
      const postsWithUsers = posts.map((post: Post) => ({
        ...post,
        author: usersData.users.find((user: User) => user.id === post.userId),
      }))
      setPosts(postsWithUsers)
      setTotal(total)
    } catch (error) {
      console.error("태그별 게시물 가져오기 오류:", error)
    }
    setLoading(false)
  }

  // 게시물 추가
  const addPost = async () => {
    try {
      const data = await addPostApi(newPost)
      const newPosts = [data, ...posts]
      setPosts(newPosts)
      setShowAddDialog(false)
      setNewPost({ title: "", body: "", userId: 1 })
    } catch (error) {
      console.error("게시물 추가 오류:", error)
    }
  }

  // 게시물 업데이트
  const updatePost = async () => {
    try {
      const data = await updatePostApi(selectedPost as Post)
      const newPosts = posts.map((post) => (post.id === data.id ? data : post))
      setPosts(newPosts)
      setShowEditDialog(false)
    } catch (error) {
      console.error("게시물 업데이트 오류:", error)
    }
  }

  // 게시물 삭제
  const deletePost = async (id: number) => {
    try {
      await deletePostApi(id)
      const newPosts = posts.filter((post: Post) => post.id !== id)
      setPosts(newPosts)
    } catch (error) {
      console.error("게시물 삭제 오류:", error)
    }
  }

  // 댓글 가져오기
  const fetchComments = async (postId: number) => {
    if (comments[postId]) return // 이미 불러온 댓글이 있으면 다시 불러오지 않음
    try {
      const data = await fetchCommentsApi(postId)
      const newComments = { ...comments, [postId]: data.comments }
      setComments(newComments)
    } catch (error) {
      console.error("댓글 가져오기 오류:", error)
    }
  }

  // 댓글 추가
  const addComment = async () => {
    try {
      const data = await addCommentApi(newComment)
      const newComments = { ...comments, [data.postId]: [...(comments[data.postId] || []), data] }
      setComments(newComments)
      setShowAddCommentDialog(false)
      setNewComment({ body: "", postId: 0 })
    } catch (error) {
      console.error("댓글 추가 오류:", error)
    }
  }

  // 댓글 업데이트
  const updateComment = async () => {
    try {
      const data = await updateCommentApi(selectedComment as Comment)
      const newComments = {
        ...comments,
        [data.postId]: comments[data.postId].map((comment) => (comment.id === data.id ? data : comment)),
      }
      setComments(newComments)
      setShowEditCommentDialog(false)
    } catch (error) {
      console.error("댓글 업데이트 오류:", error)
    }
  }

  // 댓글 삭제
  const deleteComment = async (id: number, postId: number) => {
    try {
      await deleteCommentApi(id)
      const newComments = {
        ...comments,
        [postId]: comments[postId].filter((comment) => comment.id !== id),
      }
      setComments(newComments)
    } catch (error) {
      console.error("댓글 삭제 오류:", error)
    }
  }

  // 댓글 좋아요
  const likeComment = async (id: number, postId: number) => {
    try {
      const comment = comments[postId].find((c: Comment) => c.id === id)
      if (!comment) {
        console.error("댓글을 찾을 수 없습니다.")
        return
      }
      const data = await likeCommentApi(id, comment.likes + 1)
      const newComments = {
        ...comments,
        [postId]: comments[postId].map((comment) =>
          comment.id === data.id ? { ...data, likes: comment.likes + 1 } : comment,
        ),
      }
      setComments(newComments)
    } catch (error) {
      console.error("댓글 좋아요 오류:", error)
    }
  }

  // 게시물 상세 보기
  const openPostDetail = (post: Post) => {
    setSelectedPost(post)
    fetchComments(post.id)
    setShowPostDetailDialog(true)
  }

  // 사용자 모달 열기
  const openUserModal = async (user: User) => {
    try {
      const userData = await fetchUserDetailApi(user.id)
      setSelectedUser(userData)
      setShowUserModal(true)
    } catch (error) {
      console.error("사용자 정보 가져오기 오류:", error)
    }
  }

  useEffect(() => {
    fetchTags()
  }, [])

  useEffect(() => {
    if (selectedTag) {
      fetchPostsByTag(selectedTag)
    } else {
      fetchPosts()
    }
    updateURL()
  }, [skip, limit, sortBy, sortOrder, selectedTag])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSkip(parseInt(params.get("skip") || "0"))
    setLimit(parseInt(params.get("limit") || "10"))
    setSearchQuery(params.get("search") || "")
    setSortBy(params.get("sortBy") || "")
    setSortOrder(params.get("sortOrder") || "asc")
    setSelectedTag(params.get("tag") || "")
  }, [location.search])

  return {
    posts,
    total,
    skip,
    limit,
    searchQuery,
    selectedPost,
    sortBy,
    sortOrder,
    showAddDialog,
    showEditDialog,
    newPost,
    loading,
    tags,
    selectedTag,
    comments,
    selectedComment,
    newComment,
    showAddCommentDialog,
    showEditCommentDialog,
    showPostDetailDialog,
    showUserModal,
    selectedUser,
    updateURL,
    searchPosts,
    fetchPostsByTag,
    addPost,
    updatePost,
    deletePost,
    addComment,
    updateComment,
    deleteComment,
    likeComment,
    openPostDetail,
    openUserModal,
    setSelectedComment,
    setShowAddCommentDialog,
    setShowEditCommentDialog,
    setShowPostDetailDialog,
    setShowUserModal,
    setSelectedTag,
    setSearchQuery,
    setSortBy,
    setSortOrder,
    setLimit,
    setSkip,
    setSelectedPost,
    setShowEditDialog,
    setShowAddDialog,
    setNewPost,
    setNewComment,
  }
}
