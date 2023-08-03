import { gql } from "@apollo/client";

export const ADD_PRODUCTS = gql`
  mutation addProducts(
    $name: String
    $description: String
    $price: Float
    $rentPrice: Float
    $rentType: String
    $createdBy: Int
    $categories: [String]
  ) {
    addProduct(
      name: $name
      description: $description
      price: $price
      rentType: $rentType
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
    $rentType: String
    $categories: [String]
  ) {
    editProduct(
      id: $id
      name: $name
      description: $description
      price: $price
      rentPrice: $rentPrice
      rentType: $rentType
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

export const BUY_PRODUCT = gql`
  mutation buyProduct($productId: Int, $userId: Int) {
    buyProduct(productId: $productId, userId: $userId) {
      id
    }
  }
`;

export const RENT_PRODUCT = gql`
  mutation rentProduct(
    $productId: Int
    $userId: Int
    $startDate: String
    $endDate: String
  ) {
    rentProduct(
      productId: $productId
      userId: $userId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
    }
  }
`;
