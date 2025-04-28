import { create } from "zustand"
import { ModalKey } from "../config/modalKeys"

interface ModalState {
  openedModal: ModalKey | null
  openModal: (key: ModalKey) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  openedModal: null,
  openModal: (key) => set({ openedModal: key }),
  closeModal: () => set({ openedModal: null }),
}))
