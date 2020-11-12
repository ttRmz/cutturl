import { useGet } from 'restful-react'

export const useLinks = () => {
  const { data, ...rest } = useGet({
    path: '/links',
  })

  return { links: data, ...rest }
}