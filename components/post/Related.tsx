import formatDistanceToNow from "date-fns/formatDistanceToNow";
import React from "react";
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
            image={post.originalImage}
            description={post.subtitle}
            icon={post.lang}
            title={post.title}
            date={formatDistanceToNow(new Date(post.date), {
              addSuffix: true,
            })}
            to={post.path}
            key={post.path}
          />
        ))}
      </div>
    </>
  );
};

export default Related;
