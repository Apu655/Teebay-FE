import { Flex, Button, LoadingOverlay } from "@mantine/core";
import {
  PageStyle,
  ProductListWrapper,
  StyledTitle,
} from "@/Common/Components";
import ProductCard from "@/Common/Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { AuthGuard } from "@/Guards";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "@/Queries/ProductQueries";
import { useEffect, useContext, useState } from "react";
import ProductViewCard from "@/Common/Components/ProductCard/ProductViewCard";
import { UserContext } from "@/Context/UserContext";

const AllProduct = () => {
  const { user } = useContext(UserContext);
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    if (data && user) {
      setProducts(
        data.getAllProduct.filter((val: any) => val.createdBy != user.id)
      );
    }
  }, [user, data]);
  if (loading) return <LoadingOverlay visible={loading} />;
  return (
    <AuthGuard>
      <PageStyle>
        <StyledTitle align="center">All Product</StyledTitle>
        <ProductListWrapper>
          {products &&
            products.map((val: any, index: number) => (
              <ProductViewCard refetch={refetch} {...val} key={index} />
            ))}
        </ProductListWrapper>
        <Flex my={20} justify="flex-end"></Flex>
      </PageStyle>
    </AuthGuard>
  );
};

export default AllProduct;
