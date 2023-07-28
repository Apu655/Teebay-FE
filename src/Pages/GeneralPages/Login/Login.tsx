import { useNavigate } from "react-router-dom";
import { Box, Flex, Card, Button, Group, Tooltip, Anchor } from "@mantine/core";
import { useForm, isEmail, hasLength, matchesField } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";

import {
  PageStyle,
  StyledForm,
  StyledPasswordInput,
  StyledTextInput,
} from "@/Common/Components";
import {
  StyledText,
  StyledTitle,
} from "@/Common/Components/TextStyles/TextStyles";
import { LOGIN } from "@/Queries";
import { useContext, useEffect } from "react";
import { UserContext } from "@/Context/UserContext";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [login, { loading, error, data }] = useLazyQuery(LOGIN);

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

  const handleLogin = async () => {
    try {
      const { data } = await login({ variables: userLoginForm.values });

      loginUser(data.login);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      navigate("/myProduct");
    }
  }, [user]);
  return (
    <PageStyle>
      <Flex mih="90vh" justify="center" align="center">
        <Box>
          <StyledTitle color="dimmed" align="center">
            {" "}
            SIGN IN
          </StyledTitle>
          <Card withBorder>
            <StyledForm onSubmit={userLoginForm.onSubmit(handleLogin)}>
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
                <Button onClick={handleLogin}>Test</Button>
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
    </PageStyle>
  );
};

export default Login;
