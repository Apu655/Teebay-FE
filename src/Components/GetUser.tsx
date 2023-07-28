import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query {
    getAllProduct {
      name
      price
    }
  }
`;

const GetUser = () => {
  const obj = useQuery(GET_USER);
  console.log(obj);
  return <div>GetUser</div>;
};

export default GetUser;
