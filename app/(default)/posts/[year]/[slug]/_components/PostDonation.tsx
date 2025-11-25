import classes from "./PostDonation.module.css";

interface IPostDonationProps {
  children: React.ReactNode;
}

const PostDonation: React.FC<IPostDonationProps> = ({ children }) => {
  return <div className={classes.PostDonation}>{children}</div>;
};

export default PostDonation;
