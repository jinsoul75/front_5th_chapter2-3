export const DEFAULT_PAGINATION = {
  skip: 0,
  limit: 10,
  sortOrder: "asc",
  searchQuery: "",
  sortBy: "",
  selectedTag: "",
}

export const DEFAULT_FORMS = {
  post: { title: "", body: "", userId: 1 },
  comment: { body: "", postId: null, userId: 1 },
}
