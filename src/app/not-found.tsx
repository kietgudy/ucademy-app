import Link from "next/link";

const IconLeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-[#1a1b1e]">
      <h1 className="font-bold text-7xl mb-5">404</h1>
      <h1 className="font-semibold text-5xl mb-7">Không tìm thấy trang</h1>
      <h2 className="text-center text-lg max-w-[600px] mx-auto mb-8 text-gray-500">
        Dường như trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Hãy kiểm
        tra lại đường dẫn hoặc quay về trang chủ.
      </h2>
      <Link href="/" className="flex items-center gap-2 hover:text-primary">
        {IconLeftArrow}
        Về trang chủ
      </Link>
    </div>
  );
};

export default PageNotFound;
