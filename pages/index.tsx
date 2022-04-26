import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.route === '/') router.push('/task');
  }, [ router, router.route ]);

  return <></>;
}

export default Home;
