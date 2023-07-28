import { Box, Flex, Card, Button, Group, Tooltip } from "@mantine/core";
import { IconAt, IconLock, IconLocation } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, isEmail, hasLength, matchesField } from "@mantine/form";
import { useMutation } from "@apollo/client";

import {
  PageStyle,
  StyledForm,
  StyledPasswordInput,
  StyledTextInput,
} from "@/Common/Components";
import { StyledText, StyledTitle } from "@/Common/Components/TextStyles";
import { REGISTER } from "@/Queries/UserQueries";

const Registration = () => {
  const navigate = useNavigate();
  const userRegistrationForm = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cPassword: "",
      phoneNumber: "",
      address: "",
    },
    validate: {
      email: isEmail("Please enter a valid mail."),
      password: hasLength({ min: 4 }, "Password must have minimum 4 character"),
      cPassword: matchesField("password", "Password doesn't not matches"),
    },
  });

  const [register] = useMutation(REGISTER, {
    variables: userRegistrationForm.values,
  });

  const handleRegistration = async () => {
    register();
    navigate("/login");
  };

  return (
    <PageStyle>
      <Flex mih="90vh" justify="center" align="center">
        <Box>
          <StyledTitle color="dimmed" align="center">
            {" "}
            SIGN UP
          </StyledTitle>
          <Card withBorder>
            <StyledForm
              onSubmit={userRegistrationForm.onSubmit(handleRegistration)}
            >
              <Flex gap={10}>
                <StyledTextInput
                  icon={<IconAt />}
                  placeholder="First Name"
                  {...userRegistrationForm.getInputProps("firstName")}
                />
                <StyledTextInput
                  icon={<IconLock />}
                  placeholder="Last Name"
                  {...userRegistrationForm.getInputProps("lastName")}
                />
              </Flex>
              <StyledTextInput
                icon={<IconLocation />}
                placeholder="Address"
                {...userRegistrationForm.getInputProps("address")}
              />
              <Flex gap={10}>
                <StyledTextInput
                  icon={<IconAt />}
                  placeholder="Email"
                  {...userRegistrationForm.getInputProps("email")}
                />
                <StyledTextInput
                  icon={<IconLock />}
                  placeholder="Phone Number"
                  {...userRegistrationForm.getInputProps("phoneNumber")}
                />
              </Flex>
              <StyledPasswordInput
                icon={<IconLock />}
                placeholder="Password"
                {...userRegistrationForm.getInputProps("password")}
              />
              <StyledPasswordInput
                icon={<IconLock />}
                placeholder="Confirm Password"
                {...userRegistrationForm.getInputProps("cPassword")}
              />
              <Group mt={40} position="center">
                <Tooltip label="Login">
                  <Button type="submit">Login</Button>
                </Tooltip>
              </Group>
              <Flex justify="center">
                <StyledText>
                  Already have an account?{" "}
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Sign In
                  </Link>
                </StyledText>
              </Flex>
            </StyledForm>
          </Card>
        </Box>
      </Flex>
    </PageStyle>
  );
};

export default Registration;
