import { useCallback } from "react"
import { ModalProps, useModalStore } from "./modalStore"
import { ModalKey } from "../config/modalKeys"

/**
 * Provides state and control functions for a modal identified by the given key.
 *
 * Returns an object containing whether the modal is open, its props (if any), and functions to open or close the modal.
 *
 * @param key - The unique identifier for the modal to manage.
 * @returns An object with `isOpen`, `props`, `open`, and `close` for the specified modal.
 */
export function useModal<T = unknown>(key: ModalKey) {
  const openedModals = useModalStore((state) => state.openedModals)
  const openModal = useModalStore((state) => state.openModal)
  const closeModal = useModalStore((state) => state.closeModal)

  const modal = openedModals.find((modal) => modal.key === key)
  const isOpen = !!modal
  const props = modal?.props as T | undefined

  const open = useCallback((props?: T) => openModal(key, props as ModalProps), [key, openModal])
  const close = useCallback(() => closeModal(key), [key, closeModal])

  return { isOpen, props, open, close }
}
