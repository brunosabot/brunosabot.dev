import Post from "../../../(index)/_components/Post";
import { PostWithCount } from "../../../../../../lib/posts";
import classes from "./Related.module.css";

interface IRelatedProps {
  posts: PostWithCount[];
}

const Related: React.FC<IRelatedProps> = ({ posts = [] }) => {
  return (
    <>
      <h2 className={classes.RelatedTitle}>You might also like</h2>
      <div className={classes.RelatedWrapper}>
        {posts.map((post) => (
          <Post
            canonical={post.canonical}
            color={post.color}
            date={post.date}
            description={post.subtitle}
            image={post.originalImage}
            key={post.path}
            lang={post.lang}
            platform={post.platform}
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
