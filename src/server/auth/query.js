import { useGet } from 'restful-react'

export const useAuth = () => {
  const { data, refetch, ...rest } = useGet({
    lazy: true,
    path: '/users',
  })

  return { user: data, auth: refetch, ...rest }
}
