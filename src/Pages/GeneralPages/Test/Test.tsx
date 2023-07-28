import { StyledTitle } from "@/Common/Components";
import { ActionIcon, Button, Card, Flex, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashFilled } from "@tabler/icons-react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_USER = gql`
  query {
    getAllProduct {
      name
      price
    }
  }
`;
const Test = () => {
  const { id } = useParams();
  console.log("Param", id);
  const [deleteWarningMessage, deleteWarningMessageHandler] =
    useDisclosure(false);
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
          <Button>Yes</Button>
        </Flex>
      </Modal>
    );
  };
  const obj = useQuery(GET_USER);


  return (
    <Card m={10} p={10} withBorder>
      <Flex justify="space-between">
        <StyledTitle>Cricket Kit</StyledTitle>
        <ActionIcon
          onClick={() => {
            deleteWarningMessageHandler.toggle();
          }}
          variant="transparent"
        >
          <IconTrashFilled />
        </ActionIcon>
        <DeleteWarningMessage />
      </Flex>
      <Text c="gray">Categories: Sporting Goods; Outdoor</Text>
      <Text c="gray">Price: $500| Rent:$100 daily</Text>
      <Text>
        2016 cricket kit brand now in box, never used bought from the shop
      </Text>
      <Flex justify="space-between">
        <Text c="dimmed" fz="xs">
          Date posted: 21st August 2020
        </Text>
        <Text c="dimmed" fz="xs">
          10,000 views
        </Text>
      </Flex>
    </Card>
  );
};

export default Test;
