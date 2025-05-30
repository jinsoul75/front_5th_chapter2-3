import { axiosInstance } from "@/shared/api/axiosInstance"

export const usersApi = {
  // 사용자 목록 가져오기
  fetchUsers: async () => {
    try {
      const { data } = await axiosInstance("/users", { params: { limit: 0, select: "username,image" } })
      return data
    } catch (error) {
      console.error("사용자 목록 가져오기 오류:", error)
      throw error
    }
  },

  // 사용자 상세 정보
  fetchUserDetail: async (userId: number) => {
    try {
      const { data } = await axiosInstance(`/users/${userId}`)
      return data
    } catch (error) {
      console.error("사용자 상세 정보 가져오기 오류:", error)
      throw error
    }
  },
}
