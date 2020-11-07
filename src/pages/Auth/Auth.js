import { Link } from '@reach/router'
import { stopEvent, useInput } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Input,
  Logo,
  MessageBlock,
  PageTitle,
  Spinner,
} from '../../components'
import { useUserContext } from '../../contexts/user'
import { setPageTitle } from '../../core/setPageTitle'
import { AuthField, AuthLink, AuthWrapper } from './Auth.styles'

export default function Auth() {
  const { value: apiKey, onChange: setApiKey } = useInput('')
  const { t } = useTranslation()
  const { login, loading, error } = useUserContext()

  React.useEffect(() => {
    setPageTitle(t('auth.title'))
  }, [t])

  const handleSubmitAuth = event => {
    stopEvent(event)
    login(apiKey)
  }

  return (
    <AuthWrapper onSubmit={handleSubmitAuth}>
      <Logo />

      <PageTitle>
        {t('auth.head')}{' '}
        <a href="http://kutt.it" target="_blank" rel="noopener noreferrer">
          Kutt
        </a>
      </PageTitle>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <Input
            label={t('auth.input.label')}
            placeholder={t('auth.input.placeholder')}
            value={apiKey}
            onChange={setApiKey}
            wrapperProps={{ as: AuthField }}
          />

          {error && (
            <MessageBlock color="error">{t('auth.error')}</MessageBlock>
          )}

          <Button onClick={handleSubmitAuth} type="submit" primary>
            {t('auth.submit')}
          </Button>

          <AuthLink as={Link} to="/dashboard">
            {t('home.demo')}
          </AuthLink>
        </>
      )}
    </AuthWrapper>
  )
}
