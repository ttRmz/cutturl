import { useMutate } from 'restful-react'

export const useCreateLink = () => {
  const { mutate, ...rest } = useMutate({
    path: '/links',
    verb: 'POST',
  })

  return { createLink: mutate, ...rest }
}

export const useDeleteLink = () => {
  const { mutate, ...rest } = useMutate({
    path: '/links',
    verb: 'DELETE',
  })

  const deleteLink = id => mutate(id)

  return { deleteLink, ...rest }
}

export const useUpdateLink = id => {
  const { mutate, ...rest } = useMutate({
    path: `/links/${id}`,
    verb: 'PATCH',
  })

  return { updateLink: mutate, ...rest }
}
