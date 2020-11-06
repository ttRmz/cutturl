import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Logo } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { HomeTitle, HomeWrapper } from './Home.styles'

export default function Home() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  return (
    <HomeWrapper>
      <Logo />

      <HomeTitle>{process.env.REACT_APP_NAME}</HomeTitle>

      <Button as={Link} to="/dashboard" primary>
        Use for free
      </Button>

      <Button as={Link} to="/auth">
        Enter you API key
      </Button>
    </HomeWrapper>
  )
}
