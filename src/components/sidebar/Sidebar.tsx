import {
  AddSquare,
  Book,
  BoxAdd,
  Category2,
  ElementPlus,
  Global,
  Grid1,
  ReceiptItem,
  RulerPen,
  Truck,
  UserEdit,
  Wallet,
  WalletMinus,
} from "iconsax-react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/redux/hooks";
import Logo from "../logo/Logo";
import NavItem from "./NavItem";
import { useTranslation } from "react-i18next";
import transform from "app/utils/transform";

const Sidebar = () => {
  //div tag classnaming with tailwindcss
  const { t } = useTranslation("nav");

  //current route
  const { pathname } = useLocation();
  const collapseMenu = useAppSelector((state) => state.app.collapseMenu);
  console.log("pathnme", pathname);
  const menus = [
    {
      icon: (
        <Category2 variant={pathname === "/dashboard" ? "Bold" : "Linear"} />
      ),
      title: t("dashboard"),
      route: "/dashboard",
      permission: "manage-dashboard",
    },
    {
      icon: (
        <ReceiptItem variant={pathname === "/orders" ? "Bold" : "Linear"} />
      ),
      title: t("orders"),
      route: "/orders",
      // permission: "view-orders",
    },
    {
      icon: <Wallet variant={pathname === "/finance" ? "Bold" : "Linear"} />,
      title: t("finance"),
      route: "/finance",
      // permission: "manage-finance",
    },
    {
      icon: <Grid1 variant={pathname === "/maps" ? "Bold" : "Linear"} />,
      title: t("maps"),
      route: "/maps",
      permission: "manage-maps",
    },
    {
      icon: (
        <ElementPlus variant={pathname === "/produce" ? "Bold" : "Linear"} />
      ),
      title: t("production"),
      route: "/produce",
      permission: "manage-production",
    },
    {
      icon: <RulerPen variant={pathname === "/install" ? "Bold" : "Linear"} />,
      title: t("measurement_and_installation"),
      route: "/install",
      permission: "manage-install",
    },
    {
      icon: <Truck variant={pathname === "/send" ? "Bold" : "Linear"} />,
      title: t("shipping"),
      route: "/send",
      permission: "manage-shipping",
    },
    {
      icon: (
        <BoxAdd variant={pathname.includes("products") ? "Bold" : "Linear"} />
      ),
      title: t("products"),
      route: "/products",
      permission: "manage-products",
    },
    {
      icon: (
        <Book variant={pathname.includes("basicDatas") ? "Bold" : "Linear"} />
      ),
      title: t("basicDatas"),
      route: "/basicDatas",
      permission: "manage-basic-data",
    },
    {
      icon: (
        <Global variant={pathname.includes("translations") ? "Bold" : "Linear"} />
      ),
      title: t("translations"),
      route: "/translations",
      permission: "manage-translation",
    },
    {
      icon: (
        <WalletMinus variant={pathname.includes("wallet") ? "Bold" : "Linear"} />
      ),
      title: t("walletAndTransactions"),
      route: "/wallet",
      // permission: "manage-basic-data",
    },
    {
      icon: (
        <UserEdit
          variant={pathname.includes("permissions") ? "Bold" : "Linear"}
        />
      ),
      title: t("permissions"),
      route: "/permissions",
      permission: "manage-permissions",
    },
  ];

  return (
    <div
      className={`flex flex-col ${
        collapseMenu ? "w-[84px]" : "w-[280px]"
      } h-screen bg-white`}
    >
      <div className="flex flex-col flex-1 h-0">
        <div className="flex items-center justify-center h-[80px] px-4 bg-gray-800">
          <Logo />
        </div>
        <nav className="flex-1 pe-5 py-[13px] ps-0 bg-gray-800">
          {menus.map(
            (menu, index) =>
              ((menu.permission &&
                transform.checkPermission(menu.permission)) ||
                !menu.permission) && (
                <NavItem
                  key={index}
                  collapseMenu={collapseMenu}
                  route={menu.route}
                  icon={menu.icon}
                  title={menu.title}
                  active={pathname.includes(menu.route)}
                />
              )
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
