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
      {data?.blogs?.map((blog) => (
        <Link to={`blog/${blog?.id}`}>
          <BlogContainer key={blog?.id}>
            <BlogTitle>{blog?.title}</BlogTitle>
            <BlogAuthor>- {blog?.author}</BlogAuthor>
            <BlogContent>{blog?.content}</BlogContent>
          </BlogContainer>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
