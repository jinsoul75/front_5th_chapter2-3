import { Post } from "../types/postTypes"

import { highlightText } from "@/shared/utils/highlightText"

interface PostTagListProps {
  post: Post
  searchQuery: string
  selectedTag: string
  onTagClick: (tag: string) => void
}

export const PostTagList = ({ post, searchQuery, selectedTag, onTagClick }: PostTagListProps) => {
  return (
    <div className="space-y-1">
      <div>{highlightText(post.title, searchQuery)}</div>

      <div className="flex flex-wrap gap-1">
        {post.tags?.map((tag: string) => (
          <span
            key={tag}
            className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
              selectedTag === tag
                ? "text-white bg-blue-500 hover:bg-blue-600"
                : "text-blue-800 bg-blue-100 hover:bg-blue-200"
            }`}
            onClick={() => {
              onTagClick(tag)
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
