import React, { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";

interface Props {
  title: string;
  icon: ReactNode;
}

const MenuItem: FC<Props> = (props) => {
  const { title, icon } = props;
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <span className={styles.txt}>{title}</span>
    </div>
  );
};

export default MenuItem;
