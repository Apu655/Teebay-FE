import { StyledTitle } from "@/Common/Components";
import { ActionIcon, Button, Card, Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { IProductCard } from "./Type";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "@/Mutations/ProductMutations";
const ProductCard = ({
  id,
  name,
  price,
  description,
  categories,
  refetch,
}: any) => {
  const [deleteWarningMessage, deleteWarningMessageHandler] =
    useDisclosure(false);
  const navigate = useNavigate();

  const [
    deleteProduct,
    { data: deleteData, loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_PRODUCT);

  const handleDelete = async (id: number) => {
    await deleteProduct({ variables: { id: id } });
    
    deleteWarningMessageHandler.close();
    await refetch();
  };

  const DeleteWarningMessage = () => {
    return (
      <Modal
        opened={deleteWarningMessage}
        onClose={() => deleteWarningMessageHandler.close()}
        title="Authentication"
        centered
      >
        Are you sure you want to delete this product?
        <Flex justify="flex-end" gap={10}>
          <Button onClick={() => deleteWarningMessageHandler.close()}>
            No
          </Button>
          <Button
            onClick={() => {
              handleDelete(id);
            }}
          >
            Yes
          </Button>
        </Flex>
      </Modal>
    );
  };

  const handleTrashIconClick = (e: any) => {
    e.stopPropagation();
    deleteWarningMessageHandler.toggle();
  };

  const productCardClickHandler = (id: string | number) => {
    navigate("/myProduct/" + id);
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
          <ActionIcon onClick={handleTrashIconClick} variant="transparent">
            <IconTrashFilled />
          </ActionIcon>
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
      <DeleteWarningMessage />
    </>
  );
};

export default ProductCard;
