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
    $address: String
    $phoneNumber: String
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      address: $address
      phoneNumber: $phoneNumber
    ) {
      email
      firstName
      lastName
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query gerUserDetails($id: Int) {
    getUserDetails(id: $id) {
      rentList {
        id
        productId
        product {
          id
          name
          description
          price
          rentPrice
          rentType
          createdAt
          categories {
            name
          }
        }
      }
      LentDetail {
        id
        productId
        product {
          id
          name
          description
          price
          rentType
          rentPrice
          createdAt
          categories {
            name
          }
        }
      }
      PurchaseDetail {
        id
        productId
        product {
          id
          name
          description
          price
          rentType
          rentPrice
          createdAt
          categories {
            name
          }
        }
      }
      SellDetail {
        id
        productId
        product {
          id
          name
          description
          price
          createdAt
          rentType
          rentPrice
          categories {
            name
          }
        }
      }
    }
  }
`;
