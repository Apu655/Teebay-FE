import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    getAllProduct {
      id
      name
      description
      price
      createdBy
      createdAt
      rentPrice
      rentType
      categories {
        name
      }
    }
  }
`;

export const GET_PRODUCTS_BY_ID = gql`
  query getProductById($id: String) {
    getProductById(id: $id) {
      id
      name
      description
      rentType
      createdAt
      rentPrice
      rentType
      categories {
        id
        name
      }
      price
    }
  }
`;

export const GET_PRODUCTS_BY_CREATOR = gql`
  query getProductByCreator($id: Int) {
    getProductByCreator(id: $id) {
      id
      name
      description
      price
      createdAt
      rentPrice
      rentType
      createdBy
      categories {
        name
      }
    }
  }
`;
