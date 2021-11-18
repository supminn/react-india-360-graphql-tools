import { gql } from "@apollo/client";

export const getBlogById = gql`
  query getBlogById($blogId: ID!) {
    blog(id: $blogId) {
      id
      title
      author
      content
    }
  }
`;
