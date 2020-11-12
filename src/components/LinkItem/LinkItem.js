import { faClone, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {
  faCheck,
  faEllipsisH,
  faExternalLinkAlt,
  faPenAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import { copyToClipboard, stopEvent } from '@ttrmz/react-utils'
import PropTypes from 'prop-types'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Badge } from '../Badge'
import { Dropdown } from '../Dropdown'
import { EllipsisSpan } from '../EllipsisSpan'
import { IconBlock } from '../IconBlock'
import {
  LinkItemDetails,
  LinkItemLink,
  LinkItemTarget,
  LinkItemWrapper,
} from './LinkItem.styles'

export function LinkItem({ data, editable, ...props }) {
  const [copied, setCopied] = React.useState(false)
  const { t } = useTranslation()

  const handleCopyLink = event => {
    stopEvent(event)
    copyToClipboard(data.link)
    setCopied(true)
  }

  React.useEffect(() => {
    if (copied) {
      const interval = setInterval(() => setCopied(false), 3000)
      return () => clearInterval(interval)
    }
  }, [copied])

  const handleDeleteLink = () => {
    console.log('handleDeleteLink')
  }

  return (
    <LinkItemWrapper {...props}>
      <IconBlock
        as="button"
        icon={copied ? faCheck : faClone}
        onClick={handleCopyLink}
      />
      <LinkItemDetails>
        <LinkItemLink
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EllipsisSpan>{data.link}</EllipsisSpan>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </LinkItemLink>

        {editable ? (
          <Dropdown
            actionElement={
              <Badge color="grey">
                <FontAwesomeIcon icon={faEllipsisH} />
              </Badge>
            }
          >
            <Dropdown.Item as={Link} to={`/link/${data.id}`} icon={faPenAlt}>
              {t('link.edit')}
            </Dropdown.Item>

            <Dropdown.Item
              as="button"
              onClick={handleDeleteLink}
              color="error"
              icon={faTrashAlt}
            >
              {t('link.delete')}
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Badge color={data.banned ? 'error' : 'primary'}>
            {data.banned ? t('link.banned') : t('link.live')}
          </Badge>
        )}

        <LinkItemTarget
          as="a"
          href={data.target}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.target}
        </LinkItemTarget>
      </LinkItemDetails>
    </LinkItemWrapper>
  )
}

LinkItem.propTypes = {
  data: PropTypes.object.isRequired,
  editable: PropTypes.bool,
}
