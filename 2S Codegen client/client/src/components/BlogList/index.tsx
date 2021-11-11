import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { Blog as BlogType, useGetAllBlogsQuery } from "../../generated/graphql";
import {
  BlogAuthor,
  BlogContainer,
  BlogTitle,
  BlogContent,
} from "../CommonComponents";

const BlogList = () => {
  const { data, error, loading } = useGetAllBlogsQuery();

  if (loading) return <BlogContainer>Loading...</BlogContainer>;
  if (error) return <BlogContainer>Error :(</BlogContainer>;

  return (
    <div>
      {data?.blogs?.map(({ id, title, author, content }: BlogType) => (
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
