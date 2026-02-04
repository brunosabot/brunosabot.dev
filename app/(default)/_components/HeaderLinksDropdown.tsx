import { CircleChevronDown } from "lucide-react";

import classes from "./HeaderLinksDropdown.module.css";

interface IHeaderLinksDropdownProps {
  children: React.ReactNode;
}

export default function HeaderLinksDropdown({
  children,
}: IHeaderLinksDropdownProps) {
  return (
    <div className={classes.HeaderLinksDropdown}>
      <button aria-label="Menu" className={classes.HeaderLinksDropdownButton}>
        <CircleChevronDown
          className={classes.HeaderLinksDropdownButtonIcon}
          size={20}
          strokeWidth={2}
        />
      </button>
      <div className={classes.HeaderLinksDropdownContent}>{children}</div>
    </div>
  );
}
