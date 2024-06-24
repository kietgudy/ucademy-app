import { menuItems } from "@/constants";
import Image from "next/image";
import ActiveLink from "../common/ActiveLink";
import { IMenuItem } from "@/types";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-300 dark:border-opactity-10 dark:bg-darkThemev2 flex flex-col">
      <a href="/" className="font-bold text-3xl mb-5 flex items-center">
        <Image src="/logo.jpg" alt="Ucademy Logo" width={45} height={45} />
        cademy
      </a>
      <ul className="flex flex-col gap-2 font-medium">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between p-2 bg-gray-300 dark:bg-gray-600  rounded-xl">
        <span className="flex items-center gap-2 ">
          <UserButton />
          Account
        </span>
        <ModeToggle />
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: IMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon} {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
