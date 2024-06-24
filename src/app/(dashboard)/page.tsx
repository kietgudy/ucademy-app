import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/heading/Heading";
import createUser from "@/lib/actions/user.actions";
import React from "react";

const page = async () => {
  const user = await createUser({
    clerkId: "clerk_123",
    email: "kiet1701@gmail.com",
    username: "kiethaha",
  });
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
