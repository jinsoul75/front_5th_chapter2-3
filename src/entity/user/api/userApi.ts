import axios from "axios"

export const usersApi = {
  // 사용자 목록 가져오기
  fetchUsers: async () => {
    const { data } = await axios("/api/users", { params: { limit: 0, select: "username,image" } })
    return data
  },

  // 사용자 상세 정보
  fetchUserDetail: async (userId: number) => {
    const { data } = await axios(`/api/users/${userId}`)
    return data
  },
}
