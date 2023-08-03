import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQuery } from "@apollo/client";
import { Box, Button, Flex, LoadingOverlay, Modal } from "@mantine/core";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "@mantine/form";
import { DatePicker, DatePickerInput, DateInput } from "@mantine/dates";

import { PageStyle, StyledText, StyledTitle } from "@/Common/Components";
import { GET_PRODUCTS_BY_ID } from "@/Queries/ProductQueries";
import { UserContext } from "@/Context/UserContext";
import { BUY_PRODUCT, RENT_PRODUCT } from "@/Mutations/ProductMutations";

const ProductView = () => {
  const purchaseProductForm = useForm({
    initialValues: {
      userId: null,
      productId: null,
    },
  });

  const [rentProductForm, setRentProductForm] = useState<any>({
    startDate: "",
    endDate: "",
    productId: null,
    userId: null,
  });
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const [productData, setProductData] = useState<any>();
  const [buyWarningMessage, buyWarningMessageHandler] = useDisclosure(false);
  const [rentWarningMessage, rentWarningMessageHandler] = useDisclosure(false);
  const [buyProduct] = useMutation(BUY_PRODUCT, {
    variables: purchaseProductForm.values,
  });

  const [rentProduct, { loading: rentLoading, error: rentError }] =
    useMutation(RENT_PRODUCT);

  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { id: id },
  });

  const handleRentProductChange = (e: any) => {
    const { name, value } = e.target;
    setRentProductForm((prev: any) => ({ ...prev, [name]: value }));
    console.log(typeof rentProductForm.startDate);
  };

  const handleRentProductSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await rentProduct({
        variables: rentProductForm,
      });
      rentWarningMessageHandler.close();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyProduct = async () => {
    await buyProduct();
    buyWarningMessageHandler.close();
  };

  useEffect(() => {
    if (data && data.getProductById) {
      setProductData(data.getProductById);
      purchaseProductForm.setFieldValue("productId", data.getProductById.id);
      setRentProductForm((prev: any) => ({
        ...prev,
        ["productId"]: data.getProductById.id,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (user && user.id) {
      purchaseProductForm.setFieldValue("userId", user.id);
      setRentProductForm((prev: any) => ({ ...prev, ["userId"]: user.id }));
    }
  }, [user]);

  const RentWarningMessage = () => {
    return (
      <Modal
        opened={rentWarningMessage}
        onClose={() => rentWarningMessageHandler.close()}
        centered
        title="Rental period"
      >
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <input
            type="date"
            className="border p-2"
            name="startDate"
            onChange={handleRentProductChange}
            value={rentProductForm.startDate}
          />
          <input
            type="date"
            className="border p-2"
            onChange={handleRentProductChange}
            name="endDate"
            value={rentProductForm.endDate}
          />
        </div>
        <Flex justify="flex-end" gap={10}>
          <Button bg="red" onClick={() => rentWarningMessageHandler.close()}>
            Go back
          </Button>
          <Button onClick={handleRentProductSubmit} bg="violet">
            Confirm rent
          </Button>
        </Flex>
      </Modal>
    );
  };

  const BuyWarningMessage = () => {
    return (
      <Modal
        opened={buyWarningMessage}
        onClose={() => buyWarningMessageHandler.close()}
        title="Are you sure you want to buy this product?"
        centered
      >
        <Flex justify="flex-end" gap={10}>
          <Button bg="red" onClick={() => buyWarningMessageHandler.close()}>
            No
          </Button>
          <Button onClick={() => handleBuyProduct()} bg="violet">
            Yes
          </Button>
        </Flex>
      </Modal>
    );
  };

  if (loading || !productData) return <LoadingOverlay visible={true} />;
  return (
    <PageStyle>
      <Box mt={100} mih="40vh">
        <StyledTitle>{productData.name}</StyledTitle>

        <StyledText c="gray" fz="sm">
          Categories:{" "}
          {productData.categories.map((val: any, index: number) => (
            <span key={index}>
              {val.name}{" "}
              {index == productData.categories.length - 1 ? "" : ", "}
            </span>
          ))}
        </StyledText>
        <StyledText c="gray" fz="sm">
          Price : ${productData.price}
        </StyledText>
        <StyledText>{productData.description}</StyledText>
      </Box>
      <Flex justify="flex-end" gap={20}>
        <Button onClick={() => rentWarningMessageHandler.toggle()}>Rent</Button>
        <Button onClick={() => buyWarningMessageHandler.toggle()}>Buy</Button>
      </Flex>
      <RentWarningMessage />
      <BuyWarningMessage />
    </PageStyle>
  );
};

export default ProductView;
