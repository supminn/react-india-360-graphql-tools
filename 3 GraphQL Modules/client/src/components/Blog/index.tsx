import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../generated/graphql";
import {
  BlogAuthor,
  BlogContainer,
  BlogContent,
  BlogTitle,
} from "../CommonComponents";

const Blog = () => {
  const { blogId = '' } = useParams();
  const { data, error, loading } = useGetBlogByIdQuery({
    variables: {
      blogId,
    },
  });

  if (loading) return <BlogContainer>Loading...</BlogContainer>;
  if (error) return <BlogContainer>Error :(</BlogContainer>;

  return (
    <BlogContainer>
      <BlogTitle>{data?.blog?.title}</BlogTitle>
      <BlogAuthor>- {data?.blog?.author}</BlogAuthor>
      <BlogContent>{data?.blog?.content}</BlogContent>
    </BlogContainer>
  );
};

export default Blog;
