import React, { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";

interface Props {
  index: number;
  title: string;
  icon: ReactNode;
  isActive: boolean;
  onItemClicked: (index: number) => void;
}

const MenuItem: FC<Props> = (props) => {
  const { index, title, icon, isActive, onItemClicked } = props;
  return (
    <div className={styles.container} onClick={() => onItemClicked(index)}>
      {icon}
      <span className={styles.txt}>{title}</span>
      <span>{"isActive: " + isActive}</span>
    </div>
  );
};

export default MenuItem;
