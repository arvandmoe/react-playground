import { NextPage } from "next";
import avatar from "public/images/user.jpg";
import styles from "./BillingPage.module.scss";
import MenuList from "./components/MenuList/MenuList";
import UserItem from "./components/UserItem/UserItem";

const BillingPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div id="sidebar" className={styles.sidebar}>
        <UserItem avatar={avatar.src} fullName="Mohammad Khaki" userId="@mdkhaki" />
        <MenuList />
      </div>
      <div id="content" className={styles.content}>
        Main
      </div>
    </div>
  );
};

export default BillingPage;
