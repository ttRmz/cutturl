import React from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonLink, Logo, PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'
import { HomeAction } from './Home.styles'

export default function Home() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle()
  }, [])

  return (
    <Layout centered>
      <Logo />

      <PageTitle aliign="center">{process.env.REACT_APP_NAME}</PageTitle>

      <HomeAction as={ButtonLink} to="/auth">
        {t('home.key')}
      </HomeAction>

      <HomeAction as={ButtonLink} color="secondary" to="/dashboard">
        {t('home.demo')}
      </HomeAction>
    </Layout>
  )
}
