import React from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./ModalAnimated.module.css";
import ModalPortal from "./ModalPortal";
import ModalView from "./ModalView";
import useEscape from "./useEscape";

type ViewComponentType = React.FunctionComponent<{
  children: React.ReactNode;
  onClose: () => void;
}>;

interface Props {
  active: boolean;
  children: React.ReactNode;
  onClose: () => void;
  view?: ViewComponentType;
}

const ModalAnimated: React.FC<Props> = ({
  active,
  children,
  onClose,
  view: ViewComponent = ModalView,
}) => {
  useEscape(active, onClose);

  return (
    <CSSTransition in={active} timeout={300} classNames="modal">
      <ModalPortal active={active}>
        <div className={classes.ModalAnimated}>
          <ViewComponent onClose={onClose}>{children}</ViewComponent>
        </div>
      </ModalPortal>
    </CSSTransition>
  );
};

export default ModalAnimated;
