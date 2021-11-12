import classes from "./ModalView.module.css";

interface IModalViewProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalView: React.FC<IModalViewProps> = ({ onClose, children }) => (
  <>
    <button
      className={classes.Overlay}
      onClick={onClose}
      title="Close the popin"
    />
    <div className={classes.Content}>
      <button
        className={classes.Close}
        onClick={onClose}
        aria-label="Close the popin"
      >
        <svg viewBox="0 0 24 24">
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </button>
      {children}
    </div>
  </>
);

export default ModalView;
