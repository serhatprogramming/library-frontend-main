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

export const ADD_BOOK = gql`
  mutation addBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      author
      genres
      published
      title
    }
  }
`;

export const SET_BIRTH_YEAR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
      bookCount
      id
    }
  }
`;
