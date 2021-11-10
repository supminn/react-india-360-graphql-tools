import { gql } from "@apollo/client";

export const getAllBlogs = gql`
  query getAllBlogs {
    blogs {
      id
      title
      author
      content
    }
  }
`;
