import CourseUpdate from "@/components/course/CourseUpdate";
import Heading from "@/components/heading/Heading";

const UpdatePage = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  return (
    <>
      <Heading>Cập nhật khóa học</Heading>
      <CourseUpdate/>
    </>
  );
};

export default UpdatePage;
