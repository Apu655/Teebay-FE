import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    getAllProduct {
      id
      name
      description
      price
      createdBy
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
      rentPrice
      categories{
        id
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
      createdBy
      categories {
        name
      }
    }
  }
`;
