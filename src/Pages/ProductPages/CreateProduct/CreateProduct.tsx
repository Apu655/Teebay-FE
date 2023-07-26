import { PageStyle, StyledTextInput, StyledTitle } from "@/Common/Components";
import { Flex, Button, Box, Textarea, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const CreateProduct = () => {
  const productCreationForm = useForm({
    initialValues: {
      title: "",
      category: "",
      description: "",
      purchasePrice: 0,
      rentPrice: 0,
    },
  });

  const [current, setCurrent] = useState(1);

  return (
    <PageStyle>
      <Flex mih="90vh" justify="center" align="center" direction="column">
        {current === 1 && (
          <>
            {" "}
            <StyledTitle>Select a title for your product</StyledTitle>
            <StyledTextInput {...productCreationForm.getInputProps("title")} />
          </>
        )}
        {current === 2 && (
          <>
            <StyledTitle>Select a categories for your product</StyledTitle>
            <Select
              w="100%"
              my={10}
              placeholder="Select a category"
              data={["Electronic", "Outdoor", "Toys"]}
              {...productCreationForm.getInputProps("category")}
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
          <>
            <StyledTitle>Select price for your product</StyledTitle>
            <StyledTextInput
              {...productCreationForm.getInputProps("purchasePrice")}
            />
          </>
        )}
        {current == 5 && (
          <Flex my={10} gap={10} w="100%" direction="column">
            <StyledTitle>Summary</StyledTitle>
            <Text>Title: {productCreationForm.values.title}</Text>
            <Text>Categories: {productCreationForm.values.category}</Text>
            <Text>Description: {productCreationForm.values.description}</Text>
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
              {current!=5?(<Button
                onClick={() => {
                  setCurrent((prev) => prev + 1);
                  console.log(productCreationForm.values);
                }}
              >
                Next
              </Button>):
              (
                <Button>Submit</Button>
                )
              }
            </Flex>
          )}
        </Flex>
        {current}
      </Flex>
    </PageStyle>
  );
};

export default CreateProduct;
