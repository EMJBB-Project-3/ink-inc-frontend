import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    allUsers {
      username
      password
    }
  }
`;

export const QUERY_POSTS = gql`
query allPosts {
  allPosts {
    _id
    username
    text
    artist
    createdOn
    favorites
  }
}
`;

