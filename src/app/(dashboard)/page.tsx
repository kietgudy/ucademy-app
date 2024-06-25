import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/heading/Heading";
import { getAllCourses } from "@/lib/actions/course.actions";
import React from "react";

const page = async () => {
  const courses = (await getAllCourses()) || [];
  return (
    <>
      <Heading>Khám phá</Heading>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {courses.length > 0 &&
          courses?.map((item) => 
            <CourseItem  key={item.slug} data={item}/>
          )}
      </div>
    </>
  );
};

export default page;
