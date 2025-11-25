"use client";

import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { useState } from "react";

import { Post as PostType } from "../../../../../lib/notion";
import List from "./List";
import Post from "./Post";
import classes from "./Posts.module.css";

interface IPostsProps {
  posts: PostType[];
}

export default function Posts({ posts }: IPostsProps) {
  const [search, setSearch] = useState("");
  const fuse = new Fuse(posts, {
    findAllMatches: true,
    keys: ["title", "subtitle"],
    minMatchCharLength: 0,
    threshold: 0.3,
  });

  const postList =
    search.length > 0
      ? fuse.search(search)
      : posts.map((post, index) => ({ item: post, refIndex: index, score: 0 }));

  return (
    <>
      <div className={classes.PostSearch}>
        <label className={classes.PostSearchInputWrapper}>
          <Search size={18} strokeWidth={1.25} />
          <input
            className={classes.PostSearchInput}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts by keyword"
            type="search"
            value={search}
          />
        </label>
      </div>

      <List>
        {postList.map((post, index) => (
          <Post
            canonical={post.item.canonical}
            color={post.item.color}
            date={post.item.date}
            description={post.item.subtitle}
            image={post.item.originalImage}
            key={index}
            lang={post.item.lang}
            platform={post.item.platform}
            priority={index === 0}
            tags={post.item.tags}
            title={post.item.title}
            to={post.item.path}
          />
        ))}
      </List>
    </>
  );
}
