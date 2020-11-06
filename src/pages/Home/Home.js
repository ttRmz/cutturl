import React from 'react'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../core/setPageTitle'
import { HomeWrapper } from './Home.styles'

export default function Home() {
  const { t } = useTranslation()

  React.useEffect(() => {
    setPageTitle(t('home'))
  }, [t])

  return <HomeWrapper>{t('home')}</HomeWrapper>
}
