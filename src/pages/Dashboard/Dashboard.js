import React from 'react'
import { useTranslation } from 'react-i18next'
import { Logo } from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { DashboardTitle, DashboardWrapper } from './Dashboard.styles'

export default function Dashboard() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('dashboard.head'))
  }, [t])

  return (
    <DashboardWrapper>
      <Logo />

      <DashboardTitle>{t('dashboard.head')}</DashboardTitle>
    </DashboardWrapper>
  )
}
