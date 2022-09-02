export type Menu = {
  name: string;
  path: string;
};

export type DesktopProps = {
  token: string;
  menuList: Array<Menu>;
};

export type MobileProps = {
  token: string;
  menuList: Array<Menu>;
  closeDrawer: () => void;
};
