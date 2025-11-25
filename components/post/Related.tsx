import { formatDistanceToNow } from "date-fns";

import { RelatedPost } from "../../lib/posts";
import Card from "../card/Card";
import classes from "./Related.module.css";

interface IRelatedProps {
  posts: RelatedPost[];
}

const Related: React.FC<IRelatedProps> = ({ posts = [] }) => {
  return (
    <>
      <h2 className={classes.RelatedTitle}>You might also like</h2>
      <div className={classes.RelatedWrapper}>
        {posts.map((post) => (
          <Card
            date={formatDistanceToNow(new Date(post.date), {
              addSuffix: true,
            })}
            description={post.subtitle}
            icon={post.lang}
            image={post.originalImage}
            key={post.path}
            tags={post.tags}
            title={post.title}
            to={post.path}
          />
        ))}
      </div>
    </>
  );
};

export default Related;
