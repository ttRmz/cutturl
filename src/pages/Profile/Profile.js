import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonLink, PageTitle } from '../../components'
import { useUserContext } from '../../contexts/user'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'
import { ProfileMessage } from './Profile.styles'

export default function Profile() {
  const { user } = useUserContext()
  const { t } = useTranslation()

  const title = t('profile.title')

  React.useEffect(() => {
    setPageTitle(title)
  }, [title])

  return (
    <Layout showMenu title={title}>
      <PageTitle>{t('profile.head')}</PageTitle>

      <ProfileMessage>
        {t('profile.connected_with')} <b>{user.email}</b>
      </ProfileMessage>

      <Button as={ButtonLink} to="/logout" color="secondary">
        {t('profile.logout')}
      </Button>
    </Layout>
  )
}
