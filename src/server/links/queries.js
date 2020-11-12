import { useGet } from 'restful-react'

export const useLinks = () => {
  const { data, ...rest } = useGet({
    path: '/links',
  })

  return { links: data, ...rest }
}

export const useLink = id => {
  const { data, ...rest } = useGet({
    path: `/links/${id}/stats`,
  })

  return { link: data, ...rest }
}
