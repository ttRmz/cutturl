import React from 'react'
import { useTranslation } from 'react-i18next'
import { Logo, PageTitle } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { DashboardWrapper } from './Dashboard.styles'

export default function Dashboard() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('dashboard.head'))
  }, [t])

  return (
    <DashboardWrapper>
      <Logo />

      <PageTitle>{t('dashboard.head')}</PageTitle>
    </DashboardWrapper>
  )
}
