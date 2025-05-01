import { useQuery } from "@tanstack/react-query"
import { usersApi } from "./userApi"

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => usersApi.fetchUsers(),
  })
}

export const useUserDetail = ({ userId }: { userId: number }) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => usersApi.fetchUserDetail(userId),
    enabled: !!userId,
  })
}
