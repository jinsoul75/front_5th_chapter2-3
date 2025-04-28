import { Card, CardContent, CardHeader, CardTitle } from "../../../shared/ui"

interface PostManagerLayoutProps {
  header?: React.ReactNode // 헤더는 선택적으로 받을 수 있음
  children: React.ReactNode
}

// Layout은 UI 구조와 스타일링을 담당
export const PostManagerLayout = ({ header, children }: PostManagerLayoutProps) => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">{header}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
