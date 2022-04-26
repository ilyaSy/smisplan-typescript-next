// import { Suspense, lazy, useEffect } from 'react';
// import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// import SuspenseFallback from '../UI/SuspenseFallback';
import DataTable from '../DataTable';
import Sidebar from '../Sidebar';
import classes from './Content.module.scss';

// const DataTable = lazy(() => import('../DataTable'));
// const DataCalendar = lazy(() => import('../DataCalendar'));

const Content: React.FC = () => {
  return (
    <main className={classes.content}>
      <Sidebar />
      <DataTable />
      {/* <Routes >
        <Route path="calendar"
          element={
            <Suspense fallback={<SuspenseFallback type="loading" />}>
              <DataCalendar mode='discussion'/>
            </Suspense>
          }
        />

        <Route path="*"
          element={
            <Suspense fallback={<SuspenseFallback type="loading" />}>
              <DataTable />
            </Suspense>
          }
        />
      </Routes > */}
    </main>
  );
}

export default Content;
