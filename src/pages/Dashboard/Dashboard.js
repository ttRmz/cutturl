import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'

export default function Dashboard() {
  const { t } = useTranslation()

  const title = t('dashboard.head')

  React.useEffect(() => {
    setPageTitle(title)
  }, [title])

  return (
    <Layout showMenu title={title}>
      <PageTitle>{t('dashboard.head')}</PageTitle>
    </Layout>
  )
}
