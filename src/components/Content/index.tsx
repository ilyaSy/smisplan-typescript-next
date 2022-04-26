// import { Suspense, lazy } from 'react';
// import SuspenseFallback from '../UI/SuspenseFallback';
import { useRouter } from "next/router";
// import DataCalendar from "../DataCalendar";
import DataTable from '../DataTable';
import Sidebar from '../Sidebar';
import classes from './Content.module.scss';

// const DataTable = lazy(() => import('../DataTable'));
// const DataCalendar = lazy(() => import('../DataCalendar'));

const Content: React.FC = () => {
  const router = useRouter();

  return (
    <main className={classes.content}>
      <Sidebar />
      <DataTable />
      {/* {
        router.route === '/calendar' ? <DataCalendar mode='discussion'/> : <DataTable />
      } */}
    </main>
  );
}

export default Content;
