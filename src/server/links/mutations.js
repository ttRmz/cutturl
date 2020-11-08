import { useMutate } from 'restful-react'

export const useCreateLink = () => {
  const { mutate, ...rest } = useMutate({
    path: '/links',
    verb: 'POST',
  })

  return { createLink: mutate, ...rest }
}
