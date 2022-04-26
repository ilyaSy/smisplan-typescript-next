import { NextPage } from "next";
import { StorageProvider } from "../../src/storages/storage";
import { ContextProvider } from "../../src/context/ContextProvider";
import Header from "../../src/components/Header";
import Content from "../../src/components/Content";
import classes from '../../src/App.module.scss';

const DiscussionPage: NextPage = () => {
  return (
    <ContextProvider>
      <StorageProvider>
        <div className={classes.main}>
          <Header />
          <Content />
        </div>

      </StorageProvider>
    </ContextProvider>
  )
}

export default DiscussionPage;
