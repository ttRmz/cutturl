import { navigate } from '@reach/router'
import { stopEvent } from '@ttrmz/react-utils'
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
import { useModalContext } from '../../contexts/modal'
import { setPageTitle } from '../../core/setPageTitle'
import { Layout } from '../../layout'
import { useDeleteLink, useUpdateLink } from '../../server/links/mutations'
import { useLink } from '../../server/links/queries'
import { LinkForm, LinkRemoveButton } from './Link.styles'

const GET_FORM_CONFIG = t => [
  {
    key: 'target',
    label: `${t('link.taget')} *`,
    placeholder: t('link.taget_placeholder'),
  },
  {
    key: 'address',
    label: `${t('link.address')} *`,
    placeholder: t('link.address_placeholder'),
  },
  {
    key: 'description',
    label: t('link.description'),
    placeholder: t('link.description__placeholder'),
  },
]

export default function Link({ id }) {
  const { t } = useTranslation()
  const { openModal } = useModalContext()

  const { loading: loadingLink, link, refetch } = useLink(id)
  const { deleteLink, loading: loadingDelete } = useDeleteLink()
  const {
    updateLink,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useUpdateLink(id)

  const [form, setForm] = React.useState({})

  const title = t('link.title')

  React.useEffect(() => {
    link != null && setForm(link)
  }, [link])

  React.useEffect(() => {
    setPageTitle(title)
  }, [title])

  const loading = loadingDelete || loadingLink || loadingUpdate

  const openDeleteLinkModal = () => {
    openModal({
      title: t('link.delete'),
      message: `${t('link.delete_message')} ${link.link}`,
      onConfirm: () =>
        deleteLink(id).then((res, err) => !err && navigate('/history')),
    })
  }

  const handleChangeField = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSumbitChanges = event => {
    stopEvent(event)

    updateLink(form).then((res, err) => {
      !err && refetch()
    })
  }

  return (
    <Layout showMenu title={title}>
      <PageTitle>{title}</PageTitle>

      {loading && <Spinner />}

      {!loading && link && (
        <>
          <LinkItem data={link} />

          <LinkForm onSubmit={handleSumbitChanges}>
            {GET_FORM_CONFIG(t).map(field => (
              <Input
                key={field.key}
                label={field.label}
                placeholder={field.placeholder}
                value={form[field.key] || ''}
                onChange={event =>
                  handleChangeField(field.key, event.target.value)
                }
              />
            ))}

            <Button type="submit" extended color="secondary">
              {t('link.submit')}
            </Button>

            {errorUpdate && (
              <MessageBlock color="error">
                {t('link.update_error')}
              </MessageBlock>
            )}
          </LinkForm>

          <Button
            as={LinkRemoveButton}
            onClick={openDeleteLinkModal}
            extended
            color="error"
          >
            {t('link.delete')}
          </Button>
        </>
      )}
    </Layout>
  )
}
