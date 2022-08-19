import { NextPage } from "next";
import Head from "next/head";
import avatar from "public/images/user.jpg";
import { useState } from "react";
import styles from "./BillingPage.module.scss";
import MenuList from "./components/MenuList/MenuList";
import UserItem from "./components/UserItem/UserItem";

const BillingPage: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onItemClicked = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Head>
        <title>Billing Dashboard</title>
      </Head>

      <div className={styles.container}>
        <div id="sidebar" className={styles.sidebar}>
          <UserItem
            avatar={avatar.src}
            fullName="Mohammad Khaki"
            userId="@mdkhaki"
          />
          <MenuList selectedIndex={selectedIndex} onItemClicked={onItemClicked}/>
        </div>
        <div id="content" className={styles.content}>
          Main
        </div>
      </div>
    </>
  );
};

export default BillingPage;
