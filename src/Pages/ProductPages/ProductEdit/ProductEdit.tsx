import { PageStyle, StyledTextInput } from "@/Common/Components";
import { AuthGuard } from "@/Guards";
import { UPDATE_PRODUCT } from "@/Mutations/ProductMutations";
import { GET_PRODUCTS_BY_ID } from "@/Queries/ProductQueries";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Flex,
  LoadingOverlay,
  MultiSelect,
  NumberInput,
  Textarea,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const categoriesLabels = [
  { value: "1", label: "Electronics" },
  { value: "2", label: "Outdoor" },
  { value: "3", label: "Toys" },
  { value: "4", label: "Furniture" },
  { value: "5", label: "Home Appliances" },
  { value: "6", label: "Sporting Goods" },
];
const ProductEdit = () => {
  const { id } = useParams();
  const rentType = [
    { value: "hour", label: "Hourly" },
    { value: "day", label: "Day" },
  ];
  const updateProductForm = useForm({
    initialValues: {
      name: "",
      description: "",
      categories: [],
    },
  });
  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { id: id },
  });

  const [
    updateProduct,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_PRODUCT);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      await updateProduct({ variables: updateProductForm.values });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      const productData = data.getProductById;
      updateProductForm.setFieldValue("id", productData.id);
      updateProductForm.setFieldValue("name", productData.name);
      updateProductForm.setFieldValue("description", productData.description);
      updateProductForm.setFieldValue("price", productData.price);
      updateProductForm.setFieldValue("rentPrice", productData.rentPrice);
      updateProductForm.setFieldValue("rentType", productData.rentType);
      const mappedCategories = productData.categories.map((category: any) =>
        category.id.toString()
      );
      updateProductForm.setFieldValue("categories", mappedCategories);
    }
  }, [data]);
  if (loading) return <LoadingOverlay visible={loading} />;
  return (
    <AuthGuard>
      <PageStyle>
        <Flex p={40} mih="90vh" direction="column" justify="center">
          <StyledTextInput
            // defaultValue={data && data.getProductById.name}
            my={10}
            label="Title"
            {...updateProductForm.getInputProps("name")}
          />
          <MultiSelect
            my={10}
            label="Categories"
            data={categoriesLabels}
            {...updateProductForm.getInputProps("categories")}
          />
          <Textarea
            my={10}
            label="Description"
            {...updateProductForm.getInputProps("description")}
          />
          <Flex gap={20}>
            <NumberInput
              my={10}
              label="Price"
              {...updateProductForm.getInputProps("price")}
            />

            <NumberInput
              my={10}
              label="Rent"
              {...updateProductForm.getInputProps("rentPrice")}
            />
            <Select
              my={10}
              label="Rent"
              data={rentType}
              {...updateProductForm.getInputProps("rentType")}
            />
          </Flex>
          <Flex>
            <Button onClick={handleUpdate}>Edit Product</Button>
          </Flex>
        </Flex>
      </PageStyle>
    </AuthGuard>
  );
};

export default ProductEdit;
