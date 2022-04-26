// import { useRouter } from "next/router";
// import DataCalendar from "../DataCalendar";
import DataTable from '../DataTable';
import Sidebar from '../Sidebar';
import classes from './Content.module.scss';

const Content: React.FC = () => {
  // const router = useRouter();
  // remove Calendar because of conflicts in @fullcalendar
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
