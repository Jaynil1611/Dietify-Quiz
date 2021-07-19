import {
  Box,
  Image,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { useQuiz } from "../../contexts";
import { useEffect } from "react";
import { getUserDetails } from "../../server";

export const CollapseMenu = () => {
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
