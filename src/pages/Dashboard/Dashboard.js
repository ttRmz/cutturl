import { stopEvent, useInput } from '@ttrmz/react-utils'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Input,
  LinkItem,
  MessageBlock,
  PageTitle,
  Spinner,
} from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'
import { useCreateLink } from '../../server/links/mutations'
import {
  DashboardForm,
  DashboardSpinner,
  DashboardSubmit,
} from './Dashboard.styles'

export default function Dashboard() {
  const { value: link, onChange: onChangeLink, setValue: setLink } = useInput(
    '',
  )
  const [result, setResult] = React.useState(null)

  const { t } = useTranslation()
  const { createLink, loading, error } = useCreateLink()

  const title = t('dashboard.title')

  React.useEffect(() => {
    setPageTitle(title)
  }, [title])

  const handleSublitForm = event => {
    stopEvent(event)
    setResult(null)

    createLink({ target: link }).then(res => {
      setResult(res)
      setLink('')
    })
  }

  return (
    <Layout showMenu title={title}>
      <PageTitle>{t('dashboard.head')}</PageTitle>

      <DashboardForm onSubmit={handleSublitForm}>
        <Input
          onChange={onChangeLink}
          value={link}
          label="URL"
          placeholder={t('dashboard.field')}
        />

        <DashboardSubmit disabled={loading} as={Button} type="submit">
          {t('dashboard.submit')}
        </DashboardSubmit>

        {loading && <Spinner as={DashboardSpinner} />}

        {error && (
          <MessageBlock color="error">{t('dashboard.error')}</MessageBlock>
        )}

        {result && !loading && <LinkItem data={result} />}
      </DashboardForm>
    </Layout>
  )
}
