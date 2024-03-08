import Logo from "../assets/logo.svg";
import { Flex, Container } from "@radix-ui/themes";

const Header = () => {
  return (
    <Container className="bg-red-900">
      <Flex
        direction="row"
        justify={"between"}
        align={"center"}
        className="px-4"
      >
        <img src={Logo} alt={Logo} />
        <w3m-button />
      </Flex>
    </Container>
  );
};

export default Header;
