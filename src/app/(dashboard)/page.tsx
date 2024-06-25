import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/heading/Heading";
import React from "react";

const page = async () => {
  return (
    <>
      <Heading>Khám phá</Heading>
      <div className="grid grid-cols-3 gap-8 mt-4">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </>
  );
};

export default page;
