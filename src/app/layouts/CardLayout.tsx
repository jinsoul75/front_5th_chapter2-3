import { Card, CardContent, CardHeader, CardTitle } from "../../shared/ui"

interface CardLayoutProps {
  header?: React.ReactNode // 헤더는 선택적으로 받을 수 있음
  children: React.ReactNode
}

// Layout은 UI 구조와 스타일링을 담당
// 앱에서 이 페이지 하나니까 Post로 묶어서 이게 범용적 레이아웃이라할 수 있나?
// 헤더를 선택적으로 받게 함으로써 재사용가능한 레이아웃으로 선정

export const CardLayout = ({ header, children }: CardLayoutProps) => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">{header}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
