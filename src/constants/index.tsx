import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";
import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  {
    url: "/",
    title: "Khu vực học tập",
    icon: <IconPlay />,
  },
  {
    url: "/explore",
    title: "Khám phá",
    icon: <IconExplore />,
  },
];