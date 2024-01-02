import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query hello {
    allAuthors {
      born
      name
      bookCount
      id
    }
  }
`;

export const ALL_BOOKS = gql`
  query allBooks {
    allBooks {
      title
      author
      published
      id
    }
  }
`;
