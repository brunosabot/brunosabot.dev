import { WithATooltip } from "../modal/WithATooltip";
import classes from "./BiographySocial.module.css";

interface IBiographySocialProps {
  children: React.ReactNode;
  href: string;
  label: string;
}

export default function BiographySocial({
  children,
  href,
  label,
}: IBiographySocialProps) {
  return (
    <WithATooltip label={label}>
      <a
        className={classes.BiographySocial}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={label}
      >
        {children}
      </a>
    </WithATooltip>
  );
}
