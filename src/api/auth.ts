import { LoginSchema } from "../../lib/validations/login-schema";
import { SupportForm } from "../../lib/validations/support-form";
import { axiosPublicInstance } from "@/api/config";

interface IUser {
  authenticator: {
    enabled: boolean;
    secret: string;
  };
  email: string;
  fullName: string;
  id: string;
  profileImageUrl: string;
  role: string;
  require2FA: boolean;
}

interface ILoggedInUser {
  user: IUser;
  require2FA: boolean;
  token: string;
}

export const loginAdmin = async ({
  email,
  password,
}: LoginSchema): Promise<ILoggedInUser> => {
  const res = await axiosPublicInstance.post("/api/admin/login", {
    email,
    password,
  });
  const user = res.data.admin;
  const require2FA = res.data.require2FA;
  const token = res.data.token;
  return { user, token, require2FA };
};

export const verifySupportForm = async ({
  email,
  issueType,
  issue,
  subject,
  description,
}: SupportForm) => {
  const response = await axiosPublicInstance.post("/api/users/ticket", {
    email,
    issueType,
    issue,
    subject,
    description,
  });
  return response.data;
};
