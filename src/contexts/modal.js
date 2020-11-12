import React from 'react'
import { Modal } from '../components'

const ModalContext = React.createContext({})

export function useModalContext() {
  return React.useContext(ModalContext)
}

export function ModalProvider({ children, ...props }) {
  const [modalProps, setModalProps] = React.useState(null)

  const openModal = React.useCallback(
    modalProps => {
      setModalProps(modalProps)
    },
    [setModalProps],
  )

  const closeModal = React.useCallback(() => {
    setModalProps(null)
  }, [])

  const modalOpen = React.useMemo(() => modalProps != null, [modalProps])

  const values = React.useMemo(
    () => ({
      modalOpen,
      closeModal,
      openModal,
      modalProps,
    }),
    [closeModal, modalProps, openModal, modalOpen],
  )

  return (
    <ModalContext.Provider value={values} {...props}>
      {children}

      {modalOpen && <Modal onClose={closeModal} {...modalProps} />}
    </ModalContext.Provider>
  )
}
