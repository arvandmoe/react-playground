import Image from "next/image";
import { FC } from "react";
import styles from "./UserItem.module.scss";

interface Props {
  avatar: string;
  fullName: string;
  userId: string;
}

const UserItem: FC<Props> = (props) => {
  const { avatar, fullName, userId } = props;

  return (
    <div className={styles.userContainer}>
      <Image
        className={styles.avatarImg}
        src={avatar}
        width={48}
        height={48}
        alt="avatar"
      />
      <div className={styles.detailContainer}>
        <div>
          <span className={styles.txt}>{fullName}</span>
        </div>
        <div>
          <span className={styles.subTxt}>{userId}</span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
