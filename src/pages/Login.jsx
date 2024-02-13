import LoginForm from "../features/authentication/LoginForm";
import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  background-color: #fff;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h1"> Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
