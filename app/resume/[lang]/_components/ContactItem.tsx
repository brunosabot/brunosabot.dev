import { LucideIcon } from "lucide-react";
import Link from "next/link";

import classes from "./ContactItem.module.css";

interface IContactItemProps {
  children?: React.ReactNode;
  href: string;
  Icon: LucideIcon;
}

export default function ContactItem({
  children,
  href,
  Icon,
}: IContactItemProps) {
  const hasChildren = children !== undefined;
  const classList = [classes.ContactItem];

  if (hasChildren === false) {
    classList.push(classes.ContactItemWihChildren);
  }

  return (
    <Link className={classList.join(" ")} href={href}>
      <Icon size={16} strokeWidth={2} />
      {children}
    </Link>
  );
}
