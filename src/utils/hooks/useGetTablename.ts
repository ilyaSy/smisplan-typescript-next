import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

export const useGetTablename = () => {
  const [ tablename, setTablename ] = useState<string>('task');

  const router = useRouter();
  console.log(router.route);

  // useEffect(() => {
  //   if (location.pathname) {
  //     setTablename(location.pathname.replace(/\/(.+?)(\/|$)/, '$1'));
  //   }
  // }, [router]);

  return tablename;
}
