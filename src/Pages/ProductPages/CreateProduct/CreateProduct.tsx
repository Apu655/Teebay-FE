import { PageStyle, StyledTextInput, StyledTitle } from "@/Common/Components";
import { UserContext } from "@/Context/UserContext";
import { AuthGuard } from "@/Guards";
import { ADD_PRODUCTS } from "@/Mutations/ProductMutations";
import { GET_PRODUCTS_BY_CREATOR } from "@/Queries/ProductQueries";
import { useMutation, useQuery } from "@apollo/client";
import {
  Flex,
  Button,
  Box,
  Textarea,
  MultiSelect,
  Text,
  NumberInput,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const rentType = [
    { value: "hour", label: "Hourly" },
    { value: "day", label: "Day" },
  ];

  const categoriesLabels = [
    { value: "1", label: "Electronics" },
    { value: "2", label: "Outdoor" },
    { value: "3", label: "Toys" },
    { value: "4", label: "Furniture" },
    { value: "5", label: "Home Appliances" },
    { value: "6", label: "Sporting Goods" },
  ];

  const productCreationForm = useForm({
    initialValues: {
      name: "",
      categories: [],
      description: "",
      price: 0,
      createdBy: null,
      rentPrice: 0,
      rentType: "",
    },
  });

  const [current, setCurrent] = useState(1);
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCTS, {
    variables: productCreationForm.values,
  });

  const handleAddProduct = async (e: any) => {
    e.preventDefault();
    console.log(productCreationForm.values);
    try {
      if (user) {
        productCreationForm.setFieldValue("createdBy", user.id);
        await addProduct();
        navigate("/myProduct");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      productCreationForm.setFieldValue("createdBy", user.id);
    }
  }, [user]);
  return (
    <AuthGuard>
      <PageStyle>
        <Flex mih="90vh" justify="center" align="center" direction="column">
          {current === 1 && (
            <>
              {" "}
              <StyledTitle>Select a title for your product</StyledTitle>
              <StyledTextInput {...productCreationForm.getInputProps("name")} />
            </>
          )}
          {current === 2 && (
            <>
              <StyledTitle>Select a categories for your product</StyledTitle>
              <MultiSelect
                w="100%"
                my={10}
                placeholder="Select a category"
                data={categoriesLabels}
                {...productCreationForm.getInputProps("categories")}
              />
            </>
          )}
          {current === 3 && (
            <>
              <StyledTitle>Select a description for your product</StyledTitle>
              <Textarea
                my={10}
                w="100%"
                minRows={4}
                maxRows={6}
                {...productCreationForm.getInputProps("description")}
              />
            </>
          )}
          {current === 4 && (
            <Flex justify="center" direction="column" gap={10}>
              <StyledTitle>Select price</StyledTitle>
              <NumberInput
                placeholder="Price"
                label="Price"
                withAsterisk
                {...productCreationForm.getInputProps("price")}
              />

              <Flex gap={10}>
                <NumberInput
                  placeholder="Price"
                  label="Rent"
                  withAsterisk
                  {...productCreationForm.getInputProps("rentPrice")}
                />
                <Select
                  data={rentType}
                  mt={25}
                  placeholder="Select an option"
                  {...productCreationForm.getInputProps("rentType")}
                />
              </Flex>
            </Flex>
          )}
          {current == 5 && (
            <Flex my={10} gap={10} w="100%" direction="column">
              <StyledTitle>Summary</StyledTitle>
              <Text>Title: {productCreationForm.values.name}</Text>
              <Text>
                Categories:{" "}
                {productCreationForm.values.categories.map((val, index) => {
                  for (const category of categoriesLabels) {
                    if (category.value == val) {
                      return <span key={index}>{category.label} {index==productCreationForm.values.categories.length-1?"":", "}</span>;
                    }
                  }
                })}
              </Text>
              <Text>Description: {productCreationForm.values.description}</Text>
              <Flex gap={10}>
                <Text>Price: ${productCreationForm.values.price},</Text>
                <Text>
                  To rent:${productCreationForm.values.rentPrice} per{" "}
                  {productCreationForm.values.rentType}
                </Text>
              </Flex>
            </Flex>
          )}

          <Flex justify="space-between" w="100%">
            {" "}
            {current > 1 && (
              <Flex justify="flex-start">
                <Button onClick={() => setCurrent((prev) => prev - 1)}>
                  Previous
                </Button>
              </Flex>
            )}
            {current < 6 && (
              <Flex justify="flex-end" w="100%">
                {current != 5 ? (
                  <Button
                    onClick={() => {
                      setCurrent((prev) => prev + 1);
                      console.log(productCreationForm.values);
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleAddProduct}>Submit</Button>
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      </PageStyle>
    </AuthGuard>
  );
};

export default CreateProduct;
