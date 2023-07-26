import { Flex, Button } from "@mantine/core";
import {
  PageStyle,
  ProductListWrapper,
  StyledTitle,
} from "@/Common/Components";
import ProductCard from "@/Common/Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const MyProduct = () => {
  return (
    <PageStyle>
      <StyledTitle align="center">My Product</StyledTitle>
      <ProductListWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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
  );
};

export default MyProduct;
