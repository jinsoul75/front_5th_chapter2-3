import { PostDeleteButton } from "@/features/post/ui/PostDeleteButton"

import { Post } from "@/entity/post/types/postTypes"
import { PostLikes, PostTagList, PostDetailModalButton, PostEditModalButton } from "@/entity/post/ui"
import { UserAvatar } from "@/entity/user/ui/UserAvatar"

import { TableCell } from "@/shared/ui"

interface PostTableContentProps {
  post: Post
  searchQuery: string
  selectedTag: string
  onTagClick: (tag: string) => void
}

export const PostTableContent = ({ post, searchQuery, selectedTag, onTagClick }: PostTableContentProps) => {
  return (
    <>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <PostTagList post={post} searchQuery={searchQuery} selectedTag={selectedTag} onTagClick={onTagClick} />
      </TableCell>
      <TableCell>{post.author && <UserAvatar user={post.author} />}</TableCell>
      <TableCell>
        <PostLikes post={post} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <PostDetailModalButton post={post} />
          <PostEditModalButton post={post} />
          <PostDeleteButton post={post} />
        </div>
      </TableCell>
    </>
  )
}
