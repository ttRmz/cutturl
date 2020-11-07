import { Link } from '@reach/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Logo, PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { HomeWrapper } from './Home.styles'

export default function Home() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle()
  }, [])

  return (
    <HomeWrapper>
      <Logo />

      <PageTitle>{process.env.REACT_APP_NAME}</PageTitle>

      <Button as={Link} to="/auth" primary>
        {t('home.key')}
      </Button>

      <Button as={Link} to="/dashboard">
        {t('home.demo')}
      </Button>
    </HomeWrapper>
  )
}
