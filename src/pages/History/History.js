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
import { useModalContext } from '../../contexts/modal'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'
import { useDeleteLink } from '../../server/links/mutations'
import { useLinks } from '../../server/links/queries'
import {
  HistoryAsset,
  HistoryClear,
  HistoryEmptyMessage,
  HistoryList,
  HistoryListItem,
} from './History.styles'

export default function History() {
  const { t } = useTranslation()
  const { loading: loadingLinks, links, refetch } = useLinks()
  const { deleteLink, loading: loadingDelete } = useDeleteLink()
  const { openModal } = useModalContext()

  const title = t('history.title')

  React.useEffect(() => {
    setPageTitle(title)
  }, [title])

  const hasResults = links?.total > 0
  const loading = loadingDelete || loadingLinks

  const handleDeleteLink = id => {
    deleteLink(id).then((res, err) => {
      !err && refetch()
    })
  }

  const handleClearHistory = async () => {
    await Promise.all(
      links.data.map(async link => {
        await deleteLink(link.id)
      }),
    )

    refetch()
  }

  const openClearHistoryModal = () => {
    openModal({
      title: t('history.clear'),
      message: t('history.clear_message'),
      onConfirm: handleClearHistory,
    })
  }

  return (
    <Layout showMenu title={title}>
      <PageTitle>{t('history.head')}</PageTitle>

      <HistoryList>
        {loading && <Spinner />}

        {!loading &&
          (hasResults ? (
            <>
              {links?.data?.map(link => (
                <LinkItem
                  onDelete={handleDeleteLink}
                  as={HistoryListItem}
                  key={link.id}
                  data={link}
                />
              ))}

              <HistoryClear
                as={Button}
                onClick={openClearHistoryModal}
                extended
                color="error"
              >
                {t('history.clear')}
              </HistoryClear>
            </>
          ) : (
            <>
              <Asset as={HistoryAsset} src={NoDataAsset} />

              <HistoryEmptyMessage>{t('history.empty')}</HistoryEmptyMessage>

              <Button as={ButtonLink} to="/dashboard">
                {t('history.generate')}
              </Button>
            </>
          ))}
      </HistoryList>
    </Layout>
  )
}
