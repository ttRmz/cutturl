import { useLockBodyScroll } from '@ttrmz/react-utils'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import { useTranslation } from 'react-i18next'
import { useModalContext } from '../../contexts/modal'
import { Button } from '../Button'
import {
  ModalOverlay,
  ModalTitle,
  ModalWrapper,
  ModalActions,
  ModalMessage,
} from './Modal.styles'

export function Modal({
  onClose,
  onConfirm: onConfirmProp,
  title,
  message,
  ...props
}) {
  const { t } = useTranslation()
  const { closeModal } = useModalContext()

  const moutingPoint = React.useMemo(() => document.createElement('div'), [])

  useLockBodyScroll()

  React.useLayoutEffect(() => {
    document.body.appendChild(moutingPoint)
    return () => document.body.removeChild(moutingPoint)
  }, [moutingPoint])

  const onConfirm = event => {
    closeModal()
    onConfirmProp(event)
  }

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <ModalOverlay onClick={onClose} />

          <ModalWrapper tabIndex={0} {...props}>
            <ModalTitle children={title} />

            <ModalMessage children={message} />

            <ModalActions>
              <Button color="secondary" onClick={onClose}>
                {t('modal.cancel')}
              </Button>

              <Button color="error" onClick={onConfirm}>
                {t('modal.confirm')}
              </Button>
            </ModalActions>
          </ModalWrapper>
        </>,
        moutingPoint,
      )}
    </>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
}
