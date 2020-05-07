import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/Default";
import IconLinkedinBox from "../components/svg/IconLinkedinBox";
import IconTwitter from "../components/svg/IconTwitter";
import "./Posts.css";

interface Post {
  id: string;
  date: string;
  title: string;
  creator: string;
  subtitle: string;
  path: string;
  canonical: string;
}

interface Node {
  frontmatter: Post;
  html: string;
}

interface Query {
  markdownRemark: Node;
}

interface Props {
  data: Query;
}

const BlogTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const encodedUrl = encodeURI(`https://brunosabot.dev${frontmatter.path}`);
  const encodedTitle = encodeURI(`${frontmatter.title} by @brunosabot`);

  return (
    <Layout>
      {frontmatter.canonical ? (
        <Helmet>
          <link rel="canonical" href={frontmatter.canonical} />
        </Helmet>
      ) : null}
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.subtitle}</h2>

          <div className="blog-post-infos">
            <div className="blog-post-author">
              <img
                className="blog-post-author-image"
                src="/images/brunosabot.jpg"
                alt="Bruno Sabot"
              />
              <div>
                <div className="blog-post-author-name">
                  {frontmatter.creator}
                </div>
                <div className="blog-post-author-date">{frontmatter.date}</div>
              </div>
            </div>
            <div className="blog-post-social">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter className="icon-twitter" />
              </a>

              <a
                href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&source=brunosabot.dev`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedinBox className="icon-linkedin" />
              </a>
            </div>
          </div>
          {/* The content came from markdown pages and is safe */}
          {/* eslint-disable react/no-danger */}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {/* eslint-enable react/no-danger */}
        </div>
      </div>
    </Layout>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        canonical
        creator
      }
    }
  }
`;
