import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import {
  BlogAuthor,
  BlogContainer,
  BlogTitle,
  BlogContent,
} from "../CommonComponents";
import { getAllBlogs } from "./getAllBlogs.query";

const BlogList = () => {
  const { data, error, loading } = useQuery(getAllBlogs);

  if (loading) return <BlogContainer>Loading...</BlogContainer>;
  if (error) return <BlogContainer>Error :(</BlogContainer>;

  return (
    <div>
      {data.blogs.map(({ id, title, author, content }) => (
        <Link to={`blog/${id}`}>
          <BlogContainer key={id}>
            <BlogTitle>{title}</BlogTitle>
            <BlogAuthor>- {author}</BlogAuthor>
            <BlogContent>{content}</BlogContent>
          </BlogContainer>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
