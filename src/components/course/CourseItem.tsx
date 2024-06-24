import Image from "next/image";
import Link from "next/link";
import IconClock from "../icons/IconClock";
import IconEye from "../icons/IconEye";
import IconStar from "../icons/IconStar";

const courseInfo = [
  {
    title: "3000",
    icon: <IconEye />,
  },
  {
    title: "4.9",
    icon: <IconStar />,
  },
  {
    title: "11h20p",
    icon: <IconClock />,
  },
];
const CourseItem = () => {
  return (
    <div className="bg-gray-100 dark:bg-darkThemev2 border dark:border-opacity-10 border-gray-300 p-4 mt-2 rounded-2xl">
      <Link href={"#"} className="block h-[200px] relative">
        <Image
          src="https://images.unsplash.com/photo-1569514831066-93529ffe6bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlldCUyMG5hbXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-lg"
          sizes="@media (min-width: 640px) 300px, 100vh)"
          priority
        />
        <span className="inline-block px-3 py-1 rounded-xl absolute top-3 right-3 z-10 text-white font-medium bg-blue-500 text-xs ">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-4">
          Khóa học VSCode Master - Làm chủ VSCode nhanh chóng
        </h3>
        <div className="flex items-center gap-5 mb-5 text-sm font-semibold text-gray-500 dark:text-gray-400">
          {courseInfo.map((item, index) => (
            <div className="flex gap-1" key={index}>
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}

          <span className="font-bold ml-auto text-[#ff695f]">999.000 VND</span>
        </div>
        <Link
          href={"#"}
          className="flex items-center justify-center w-full h-12 mt-10 rounded-lg text-white font-semibold bg-primary"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
