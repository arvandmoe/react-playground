import { Aave, Bill, Menu, Messages3, PasswordCheck } from "iconsax-react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuList.module.scss";

interface Props {
  selectedIndex: number;
  onItemClicked: (index: number) => void;
}

const MenuList = (props: Props) => {
  const { selectedIndex, onItemClicked } = props;

  return (
    <div className={styles.container}>
      <MenuItem
        index={0}
        title="General"
        isActive={0 == selectedIndex}
        icon={<Menu size="32" color="#62618F" />}
        onItemClicked={onItemClicked}
      />
      <MenuItem
        index={1}
        title="Password"
        isActive={1 == selectedIndex}
        icon={<PasswordCheck size="32" color="#62618F" />}
        onItemClicked={onItemClicked}
      />
      <MenuItem
        index={2}
        title="Invitations"
        isActive={2 == selectedIndex}
        icon={<Messages3 size="32" color="#62618F" />}
        onItemClicked={onItemClicked}
      />
      <MenuItem
        index={3}
        title="Billings"
        isActive={3 == selectedIndex}
        icon={<Bill size="32" color="#62618F" />}
        onItemClicked={onItemClicked}
      />
      <MenuItem
        index={4}
        title="Apps"
        isActive={4 == selectedIndex}
        icon={<Aave size="32" color="#62618F" />}
        onItemClicked={onItemClicked}
      />
    </div>
  );
};

export default MenuList;
