import { Aave, Bill, Menu, Messages3, PasswordCheck } from "iconsax-react";
import React, { FC, Fragment } from "react";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.scss";

const MenuList: FC = () => {
  return (
    <div className={styles.container}>
      <MenuItem title="General" icon={<Menu size="32" color="#62618F" />} />
      <MenuItem
        title="Password"
        icon={<PasswordCheck size="32" color="#62618F" />}
      />
      <MenuItem
        title="Invitations"
        icon={<Messages3 size="32" color="#62618F" />}
      />
      <MenuItem title="Billings" icon={<Bill size="32" color="#62618F" />} />
      <MenuItem title="Apps" icon={<Aave size="32" color="#62618F" />} />
    </div>
  );
};

export default MenuList;
