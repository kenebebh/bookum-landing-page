import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
// import {
//   LoginSchema,
//   loginSchema,
// } from "../../../lib/validations/login-schema";
// import { loginAdmin } from "@/api/auth";
import {
  SupportForm,
  supportFormSchema,
} from "../../../lib/validations/support-form";
import { verifySupportForm } from "@/api/auth";

export default function Login() {
  const { register, handleSubmit } = useForm<SupportForm>({
    resolver: zodResolver(supportFormSchema),
  });

  const { isLoading, mutate } = useMutation({
    mutationFn: verifySupportForm,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  const loginHandler = (data: SupportForm) => {
    console.log("submit is supposed to run");
    mutate(data);
  };

  return (
    <div className="mx-auto my-auto max-w-sm text-center sm:max-w-md">
      <h1 className="pb-4 text-4xl font-bold leading-10">Login</h1>
      <p className="py-4 pb-8 text-lg font-medium text-slate-500">
        Enter your details to sign into the dashboard
      </p>

      <form onSubmit={handleSubmit(loginHandler)}>
        <div className="flex items-center gap-x-2 rounded-lg border border-slate-300 p-3">
          <input
            required
            type="email"
            id="email"
            placeholder="Enter Your Email..."
            className="bg-transparent placeholder:text-sm placeholder:text-secondary focus:outline-none"
            {...register("email")}
          />
        </div>

        <div className="mt-4 flex items-center gap-x-2 rounded-lg border border-slate-300 p-3">
          <input
            type="text"
            id="issuetype"
            placeholder="Enter Your issue type..."
            className="bg-transparent placeholder:text-sm placeholder:text-secondary focus:outline-none"
            {...register("issueType")}
          />
        </div>

        <div className="mt-4 flex items-center gap-x-2 rounded-lg border border-slate-300 p-3">
          <input
            type="text"
            id="issue"
            placeholder="Enter Your issue ..."
            className="bg-transparent placeholder:text-sm placeholder:text-secondary focus:outline-none"
            {...register("issue")}
          />
        </div>

        <div className="mt-4 flex items-center gap-x-2 rounded-lg border border-slate-300 p-3">
          <input
            type="text"
            id="subject"
            placeholder="Enter Your issue type..."
            className="bg-transparent placeholder:text-sm placeholder:text-secondary focus:outline-none"
            {...register("subject")}
          />
        </div>

        <div className="mt-4 flex items-center gap-x-2 rounded-lg border border-slate-300 p-3">
          <input
            type="text"
            id="description"
            placeholder="Enter Your issue type..."
            className="bg-transparent placeholder:text-sm placeholder:text-secondary focus:outline-none"
            {...register("description")}
          />
        </div>

        <button
          type="submit"
          className={`mt-8 w-full rounded-lg bg-secondary px-4 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-secondary/95`}
        >
          {isLoading ? "<Loading />" : "Login"}
        </button>
      </form>
    </div>
  );
}
