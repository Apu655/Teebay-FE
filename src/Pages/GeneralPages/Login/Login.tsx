import {
  StyledForm,
  StyledPasswordInput,
  StyledTextInput,
} from "@/Common/FormStyles";
import { StyledText, StyledTitle } from "@/Common/TextStyles/TextStyles";
import { Box, Flex, Card, Button, Group, Tooltip, Anchor } from "@mantine/core";
import { useForm, isEmail, hasLength, matchesField } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  const userLoginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Please enter a valid mail."),
      password: hasLength({ min: 1 }, "Password can not be empty"),
    },
  });
  return (
    <Flex mih={1000} justify="center" align="center">
      <Box>
        <StyledTitle color="dimmed" align="center">
          {" "}
          SIGN IN
        </StyledTitle>
        <Card withBorder>
          <StyledForm
            onSubmit={userLoginForm.onSubmit((value) => {
              console.log(value);
            })}
          >
            <StyledTextInput
              icon={<IconAt />}
              placeholder="Email"
              {...userLoginForm.getInputProps("email")}
            />
            <StyledPasswordInput
              icon={<IconLock />}
              placeholder="Password"
              {...userLoginForm.getInputProps("password")}
            />
            <Group mt={40} position="center">
              <Tooltip label="Login">
                <Button type="submit">Login</Button>
              </Tooltip>
            </Group>
            <Flex justify="center">
              <StyledText>
                Don't have an account?{" "}
                <Link to="/registration" style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </StyledText>
            </Flex>
          </StyledForm>
        </Card>
      </Box>
    </Flex>
  );
};

export default Login;
