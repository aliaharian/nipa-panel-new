import { Link } from "react-router-dom";

type navItemProps = {
  icon: any;
  title: string;
  active?: boolean;
  route: string;
};

const NavItem = ({ icon, title, active, route }: navItemProps) => {
  return (
    <div className="flex w-full">
      <div
        className={`w-[4px] h-[46px] rounded-l-[8px] ml-[16px] ${
          active ? "bg-primary-main" : ""
        }`}
      ></div>
      <Link
        to={route}
        className={`w-full mb-[17px] px-[10px] py-[11px] flex svg:text-text-500 svg:hover:text-primary-main hover:bg-primary-nav rounded-[8px] text-text-800 hover:text-primary-main hover:font-bold ${
          active
            ? "bg-primary-nav svg:text-primary-main !text-primary-main font-bold"
            : ""
        }`}
      >
        <div className="nav-item flex">
          <div className="nav-item-icon ml-[16px]">{icon}</div>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
