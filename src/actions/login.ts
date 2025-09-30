"use server";

import bcrypt from "bcrypt";

export const loginACtion = async (credentials: {
  email: string;
  password: string;
}) => {
  const { email, password } = credentials;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user?email=${email}`
  );
  const user = await response.json();

  if (user.success == false) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(password, user.data.password);

  if (!passwordMatch) {
    return null;
  }
  return user.data;
};
