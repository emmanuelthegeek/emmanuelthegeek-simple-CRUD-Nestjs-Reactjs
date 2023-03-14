import useSWR from 'swr'
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useSampleProducts = () => {
  const { data, error } = useSWR('', fetcher)

  return {
    products: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}

