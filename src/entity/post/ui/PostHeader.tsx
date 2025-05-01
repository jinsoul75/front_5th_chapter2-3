import { MODAL_KEY } from "@/shared/config"
import { AddModalButton } from "@/shared/ui/AddModalButton"

// 괜히 분리했나? 하지만 CardLayout 재사용을 위해 헤더를 나누었어야했다.
// 이 헤더는 단순 UI만 보여주지만
// '게시물추가' 라는 post entity 의미를 가지고 ADD_POST 라는 모달 key를 가진다.
// 도메인과 UI 조합이 섞여 있으므로 widget 로 분리하는 게 좋을 것 같다.
// 근데 shared 밖에 없다......... -> entity?

export const PostHeader = () => {
  return (
    <>
      <span>게시물 관리자</span>
      <AddModalButton modalKey={MODAL_KEY.ADD_POST} label="게시물 추가" />
    </>
  )
}
