import { StyledTitle } from "@/Common/Components";
import { Card, Flex, Text } from "@mantine/core";
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";

const ProductViewCard = ({
  id,
  name,
  price,
  description,
  categories,
  rentPrice,
  rentType,
  createdAt,
  link = false,
}: any) => {
  const navigate = useNavigate();

  const productCardClickHandler = (id: string | number) => {
    if (link) {
      navigate("/" + id);
    }
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
        <Text c="gray">
          Price: {price}| Rent:${rentPrice}/{rentType}
        </Text>
        <Text>{description}</Text>
        <Flex justify="space-between">
          <Text c="dimmed" fz="xs">
            Date posted:{" "}
            {dayjs(parseFloat(createdAt)).format("YYYY-MM-DD HH:mm:ss")}
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
