import {
  Box,
  Flex,
  IconButton,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { Menu as MenuType } from "./Navbar.type";
import { useQuiz } from "../../contexts";
import { useEffect } from "react";
import { getUserDetails } from "../../server";

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Box position="sticky" top="0" zIndex={1} boxShadow="md" rounded="lg">
        <Flex p="6" bg="white" align={"center"} justifyContent="space-between">
          <Flex alignItems="center">
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              mt={1}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={4} h={4} />
                  ) : (
                    <HamburgerIcon w={6} h={6} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              justify={{ base: "center", md: "start" }}
              ml={{ base: 1 }}
            >
              <Link to="/"> Dietify Quiz</Link>
            </Flex>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopMenu />
            </Flex>
          </Flex>
          <Flex>
            <CollapseMenu />
          </Flex>
        </Flex>
        <Box display={{ md: "none" }}>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <MobileMenu closeDrawer={onClose} />
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

const CollapseMenu = () => {
  const {
    state: { firstname, lastname },
    logoutUser,
    token,
    dispatch,
  } = useQuiz();

  useEffect(() => {
    token && getUserDetails(dispatch);
  }, [token, dispatch]);

  return (
    <>
      {token && (
        <Menu>
          <MenuButton as={Box}>
            <Image
              src={`https://ui-avatars.com/api/?name=${firstname}+${lastname}&rounded=true&background=fd7014&color=fff&size=32`}
              alt=""
              borderRadius="full"
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={logoutUser}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

const DesktopMenu = () => (
  <Flex align={"center"} spacing={4}>
    {menuList.map(({ name, path }) => (
      <Link to={path} key={name}>
        <Box
          as="span"
          p={2}
          fontSize={"1rem"}
          color="gray.900"
          _hover={{
            textDecoration: "none",
            color: "orange.600",
          }}
        >
          {name}
        </Box>
      </Link>
    ))}
  </Flex>
);

const MobileMenu = (prop: any) => (
  <div onClick={prop.closeDrawer}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody>
        <Flex direction={"column"} bg="white" mt={10} display={{ md: "none" }}>
          {menuList.map(({ name, path }) => (
            <NavLink to={path} key={name}>
              <Flex
                key={name}
                py={4}
                mb={4}
                justify={"center"}
                alignItems={"center"}
                _hover={{
                  backgroundColor: "teal.100",
                }}
                boxShadow="md"
              >
                <Box as="span" fontSize={"1rem"} color="gray.900">
                  {name}
                </Box>
              </Flex>
            </NavLink>
          ))}
        </Flex>
      </DrawerBody>
    </DrawerContent>
  </div>
);

const menuList: Array<MenuType> = [
  { name: "Home", path: "/" },
  { name: "Quizzes", path: "/quizzes" },
  { name: "Login", path: "/login" },
];

export default Navbar;
