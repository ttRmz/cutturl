import React from 'react'
import { useTranslation } from 'react-i18next'
import NoDataAsset from '../../assets/no-data.svg'
import {
  Asset,
  Button,
  ButtonLink,
  LinkItem,
  PageTitle,
  Spinner,
} from '../../components'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'
import { useLinks } from '../../server/links/queries'
import {
  HistoryAsset,
  HistoryEmptyMessage,
  HistoryList,
  HistoryListItem,
} from './History.styles'

export default function History() {
  const { t } = useTranslation()
  const { loading, links } = useLinks()

  const title = t('history.title')

  React.useEffect(() => {
    setPageTitle(title)
  }, [title])

  const hasResults = links?.total > 0

  return (
    <Layout showMenu title={title}>
      <PageTitle>{t('history.head')}</PageTitle>

      <HistoryList>
        {loading && <Spinner />}

        {!loading &&
          (hasResults ? (
            links?.data?.map(link => (
              <LinkItem as={HistoryListItem} key={link.id} data={link} />
            ))
          ) : (
            <>
              <Asset as={HistoryAsset} src={NoDataAsset} />

              <HistoryEmptyMessage>{t('history.empty')}</HistoryEmptyMessage>

              <Button as={ButtonLink} to="/dashboard">
                Generate links
              </Button>
            </>
          ))}
      </HistoryList>
    </Layout>
  )
}
