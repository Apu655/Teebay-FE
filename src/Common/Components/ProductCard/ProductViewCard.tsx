import { StyledTitle } from "@/Common/Components";
import { ActionIcon, Button, Card, Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { IProductCard } from "./Type";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "@/Mutations/ProductMutations";
const ProductViewCard = ({ id, name, price, description, categories }: any) => {
  const navigate = useNavigate();

  const productCardClickHandler = (id: string | number) => {
    navigate("/" + id);
  };

  return (
    <>
      <Card
        onClick={() => {
          productCardClickHandler(id);
        }}
        withBorder
      >
        <Flex justify="space-between">
          <StyledTitle>{name}</StyledTitle>
        </Flex>
        <Text c="gray">
          Categories:{" "}
          {categories &&
            categories.map((category: any, index: number) => (
              <span key={index}>{category.name} </span>
            ))}
        </Text>
        <Text c="gray">Price: {price}| Rent:$100 daily</Text>
        <Text>{description}</Text>
        <Flex justify="space-between">
          <Text c="dimmed" fz="xs">
            Date posted: 21st August 2020
          </Text>
          <Text c="dimmed" fz="xs">
            10,000 views
          </Text>
        </Flex>
      </Card>
    </>
  );
};

export default ProductViewCard;
