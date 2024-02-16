import LoginForm from "../features/authentication/LoginForm";
import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { useDarkMode } from "../context/DarkModeContext"; // Adjust the import path as necessary

const LoginLayout = styled.main`
  min-height: 100vh;
  background-color: ${(props) => (props.isDarkMode ? "#18212f" : "#fff")};
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Login() {
  const { isDarkMode } = useDarkMode();

  return (
    <LoginLayout isDarkMode={isDarkMode}>
      <Logo />
      <Heading as="h1">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
