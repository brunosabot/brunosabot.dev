import { Plus } from "lucide-react";

import classes from "./HeaderLinksDropdown.module.css";

interface IHeaderLinksDropdownProps {
  children: React.ReactNode;
}

export default function HeaderLinksDropdown({
  children,
}: IHeaderLinksDropdownProps) {
  return (
    <div className={classes.HeaderLinksDropdown}>
      <button className={classes.HeaderLinksDropdownButton}>
        <Plus size={16} strokeWidth={2} />
      </button>
      <div className={classes.HeaderLinksDropdownContent}>{children}</div>
    </div>
  );
}
