export interface IActiveLinkProps {
  url: string;
  children: React.ReactNode;
}

export interface IMenuItem {
  url: string;
  title: string;
  icon: React.ReactNode;
}

export interface ICreateUserParams {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
}
export interface ICreateCourseParams {
  title: string;
  slug: string;
}
