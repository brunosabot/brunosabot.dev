import PropTypes from "prop-types";
import React, { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import { ReactComponent as OpenInNew } from "../../svg/open-in-new.svg";
import styles from "./HeaderLink.module.css";

const HeaderLink = ({ children, to, ...props }) => {
  const { actions, values } = useContext(AppContext);
  const isExternal = to.indexOf("http") === 0;
  const onClick = () => {
    if (isExternal) {
      window.open(to);
    } else {
      actions.setPage(to);
    }
  };

  return (
    <a
      {...props}
      className={styles.HeaderLink + " " + (to === values.page ? styles.HeaderLinkActive : "")}
      onClick={onClick}
    >
      {isExternal ? <OpenInNew className={styles.External} /> : null}
      {children}
    </a>
  );
};

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default HeaderLink;
