import { create } from "zustand"
import { ModalKey } from "../config/modalKeys"

interface ModalState {
  openModal: ModalKey | null
  open: (key: ModalKey) => void
  close: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  openModal: null,
  open: (key) => set({ openModal: key }),
  close: () => set({ openModal: null }),
}))
