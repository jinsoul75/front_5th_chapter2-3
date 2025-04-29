// src/shared/store/modalStore.ts
import { create } from "zustand"
import { ModalKey } from "../config/modalKeys"

interface ModalProps {
  [key: string]: unknown
}

interface ModalState {
  openedModal: ModalKey | null
  modalProps: ModalProps | null
  openModal: (key: ModalKey, props?: ModalProps) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  openedModal: null,
  modalProps: null,
  openModal: (key, props = undefined) =>
    set({
      openedModal: key,
      modalProps: props,
    }),
  closeModal: () =>
    set({
      openedModal: null,
      modalProps: null,
    }),
}))
