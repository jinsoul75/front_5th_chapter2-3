import { create } from "zustand"
import { ModalKey } from "../config/modalKeys"

export interface ModalProps {
  [key: string]: unknown
}
interface ModalItem {
  key: ModalKey
  props?: ModalProps
}

interface ModalState {
  openedModals: ModalItem[]
  openModal: (key: ModalKey, props?: ModalProps) => void
  closeModal: (key: ModalKey) => void
  closeAllModals: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  openedModals: [],
  openModal: (key, props) =>
    set((state) => ({
      openedModals: [...state.openedModals, { key, props }],
    })),
  closeModal: (key) =>
    set((state) => ({
      openedModals: state.openedModals.filter((modal) => modal.key !== key),
    })),
  closeAllModals: () =>
    set({
      openedModals: [],
    }),
}))
