import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $firstName: String
    $lastName: String
    $email: String!
    $password: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      email
      firstName
      lastName
    }
  }
`;
