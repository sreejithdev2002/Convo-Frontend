import { userInstance } from "../axios/axiosInstance";

export const RegisterApi = (value) => {
  return userInstance.post("/register", { ...value });
};

export const LoginApi = (value) => {
  return userInstance.post("/login", { ...value });
};

export const userStatusApi = () => {
  return userInstance
    .get("/")
    .then((res) => res.data)
    .catch((err) => {
      console.error("Error fetching user status from userStatusApi : ", err);
      return { user: null };
    });
};
