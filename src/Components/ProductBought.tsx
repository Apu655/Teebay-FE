import ProductViewCard from "@/Common/Components/ProductCard/ProductViewCard";
import { UserContext } from "@/Context/UserContext";
import { GET_USER_DETAILS } from "@/Queries/UserQueries";
import { useQuery } from "@apollo/client";
import { LoadingOverlay } from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";

const ProductBought = () => {
  const { user } = useContext(UserContext);
  const [boughtList, setBoughtList] = useState<any>([]);
  const { data, loading, refetch } = useQuery(GET_USER_DETAILS, {
    variables: {
      id: user?.id,
    },
    skip: !user?.id,
  });
  const getUserDetails = async () => {
    await refetch();
    console.log(data);
  };
  useEffect(() => {
    if (user && user.id) {
      getUserDetails();
    }
    if (data) {
      setBoughtList(data.getUserDetails.PurchaseDetail);
    }
  }, [user, data]);
  if (loading) return <LoadingOverlay visible={loading} />;
  return (
    <div>
      {boughtList.length > 0 &&
        boughtList.map((val: any, index: number) => (
          <ProductViewCard {...val.product} key={index} />
        ))}
    </div>
  );
};

export default ProductBought;
