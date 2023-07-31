import { PageStyle, StyledText, StyledTitle } from "@/Common/Components";
import { GET_PRODUCTS_BY_ID } from "@/Queries/ProductQueries";
import { useQuery } from "@apollo/client";
import { Box, Button, Flex, LoadingOverlay, Spoiler } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const ProductView = (props: Props) => {
  const { id } = useParams();
  const [productData, setProductData] = useState<any>();
  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { id: id },
  });
  console.log(data);
  useEffect(() => {
    if (data && data.getProductById) {
      setProductData(data.getProductById);
    }
  }, [data]);
  console.log(productData);
  const handleProductBuy = ()=>{
    console.log("")
  }
  if (loading || !productData) return <LoadingOverlay visible={true} />;
  return (
    <PageStyle>
      <Box mt={100} mih="40vh">
        <StyledTitle>{productData.name}</StyledTitle>
        <StyledText>Categories: Electronics</StyledText>
        <StyledText>Price : ${productData.price}</StyledText>
        <StyledText>{productData.description}</StyledText>
      </Box>
      <Flex justify="flex-end" gap={20}>
        <Button>Rent</Button>
        <Button>Buy</Button>
      </Flex>
    </PageStyle>
  );
};

export default ProductView;
