import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useGetTablename = () => {
  const [ tablename, setTablename ] = useState<string>('task');

  const router = useRouter();

  useEffect(() => {
    if (router.route) {
      setTablename(router.route.replace(/\/(.+?)(\/|$)/, '$1'));
    }
  }, [router]);

  return tablename;
}
