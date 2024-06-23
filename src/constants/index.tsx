import IconComment from "@/components/icons/IconComment";
import IconCourse from "@/components/icons/IconCourse";
import IconOrder from "@/components/icons/IconOrder";
import IconPlay from "@/components/icons/IconPlay";
import IconStudy from "@/components/icons/IconStudy";
import IconUser from "@/components/icons/IconUser";
import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  {
    url: "/",
    title: "Khám phá",
    icon: <IconPlay />,
  },
  {
    url: "/study",
    title: "Khu vực học tập",
    icon: <IconStudy />,
  },
  {
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <IconCourse />,
  },
  {
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <IconUser />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment />,
  },
];