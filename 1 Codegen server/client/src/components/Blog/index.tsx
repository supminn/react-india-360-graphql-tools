import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import {
  BlogAuthor,
  BlogContainer,
  BlogContent,
  BlogTitle,
} from "../CommonComponents";
import { getBlogById } from "./getBlogById.query";

const Blog = () => {
  const { blogId } = useParams();
  const { data, error, loading } = useQuery(getBlogById, {
    variables: {
      blogId,
    },
  });

  if (loading) return <BlogContainer>Loading...</BlogContainer>;
  if (error) return <BlogContainer>Error :(</BlogContainer>;

  return (
    <BlogContainer>
      <BlogTitle>{data.blog.title}</BlogTitle>
      <BlogAuthor>- {data.blog.author}</BlogAuthor>
      <BlogContent>{data.blog.content}</BlogContent>
    </BlogContainer>
  );
};

export default Blog;
