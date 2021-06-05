import {
  Box,
  Flex,
  IconButton,
  Drawer,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Menu as MenuType } from "./Navbar.type";
import { useQuiz } from "../../contexts";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { CollapseMenu } from "./CollapseMenu";

function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isDesktopMode] = useMediaQuery("(min-width: 648px)");
  const { token } = useQuiz();

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
              <DesktopMenu menuList={menuList} token={token} />
            </Flex>
          </Flex>
          <Flex>
            <CollapseMenu />
          </Flex>
        </Flex>
        <Box display={{ md: "none" }}>
          <Drawer
            isOpen={isDesktopMode ? false : isOpen}
            placement="left"
            onClose={onClose}
          >
            <MobileMenu
              menuList={menuList}
              closeDrawer={onClose}
              token={token}
            />
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

const menuList: Array<MenuType> = [
  { name: "Home", path: "/" },
  { name: "Quizzes", path: "/quizzes" },
  { name: "Login", path: "/login" },
];

export const getMenuList = (
  menuList: Array<MenuType>,
  token: string
): Array<MenuType> =>
  token ? menuList.slice(0, menuList.length - 1) : menuList;

export default Navbar;
