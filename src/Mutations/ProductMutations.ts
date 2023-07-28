import { gql } from "@apollo/client";

export const ADD_PRODUCTS = gql`
  mutation addProducts(
    $name: String
    $description: String
    $price: Float
    $rentPrice: Float
    $createdBy: Int
    $categories: [String]
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      rentPrice: $rentPrice
      createdBy: $createdBy
      categories: $categories
    ) {
      id
      name
      description
      price
      createdBy
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: Int
    $name: String
    $description: String
    $price: Float
    $rentPrice: Float
    $categories: [String]
  ) {
    editProduct(
      id: $id
      name: $name
      description: $description
      price: $price
      rentPrice: $rentPrice
      categories: $categories
    ) {
      id
      name
      description
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Int) {
    deleteProduct(id: $id) {
      id
      name
      description
      price
    }
  }
`;
