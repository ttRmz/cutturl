import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHistory, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import { MenuLink, MenuWrapper } from './Menu.styles'

const HEIGHT_BASE = 56

const MENU_CONFIG = [
  {
    key: 'dashboard',
    icon: faLink,
    path: '/dashboard',
  },
  {
    key: 'history',
    icon: faHistory,
    path: '/history',
  },
  {
    key: 'profile',
    icon: faUser,
    path: '/profile',
  },
]

export function Menu(props) {
  const theme = useTheme()

  const { t } = useTranslation()

  return (
    <MenuWrapper {...props}>
      {MENU_CONFIG.map(route => (
        <MenuLink
          key={route.key}
          as={Link}
          to={route.path}
          getProps={({ isCurrent }) => {
            return {
              style: {
                color: isCurrent ? theme.secondary.base : theme.grey.base,
              },
            }
          }}
        >
          <FontAwesomeIcon icon={route.icon} />
          <span>{t(`menu.${route.key}`)}</span>
        </MenuLink>
      ))}
    </MenuWrapper>
  )
}

Menu.HEIGHT = HEIGHT_BASE
