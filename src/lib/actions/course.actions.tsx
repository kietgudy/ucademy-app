"use server";
import { ICreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Course, {ICourse} from "@/database/course.model";

//fetching
export async function getAllCourses(): Promise<ICourse[] | undefined> {
  try {
    connectToDatabase();
    const courses = await Course.find();
    return courses;
  } catch (error) {
    console.log(error);
  }
}
export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    connectToDatabase();
    const findCourse = await Course.findOne({ slug });
    return findCourse;
  } catch (error) {
    console.log(error);
  }
}

//CRUD
export async function createCourse(params: ICreateCourseParams) {
  try {
    connectToDatabase();
    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log(error);
  }
}
