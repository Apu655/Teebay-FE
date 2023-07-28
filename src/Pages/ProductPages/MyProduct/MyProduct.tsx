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
import { GET_PRODUCTS_BY_CREATOR } from "@/Queries/ProductQueries";
import { UserContext } from "@/Context/UserContext";
import { useContext, useEffect } from "react";

const MyProduct = () => {
  const { user } = useContext(UserContext);
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS_BY_CREATOR, {
    variables: {
      id: user?.id,
    },
    skip: !user?.id,
  });

  useEffect(() => {
    if (user && user.id) {
      console.log(user);
      refetch();
    }
  }, [user]);

  useEffect(() => {
    if (user && user.id) {
      refetch();
    }
  }, []);
  if (loading) return <LoadingOverlay visible={loading} />;
  return (
    <AuthGuard>
      <PageStyle>
        <StyledTitle align="center">My Product</StyledTitle>
        <ProductListWrapper>
          {data &&
            data.getProductByCreator &&
            data.getProductByCreator.map((val: any, index: number) => (
              <ProductCard refetch={refetch} {...val} key={index} />
            ))}
        </ProductListWrapper>
        <Flex my={20} justify="flex-end">
          <Button>
            <Link
              to="/createProduct"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Product
            </Link>
          </Button>
        </Flex>
      </PageStyle>
    </AuthGuard>
  );
};

export default MyProduct;
