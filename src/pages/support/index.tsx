import Container from "@/partials/general-ui/container";
import { AppLayout } from "@/layouts";
import { motion } from "framer-motion";
import AnimateY from "@/components/partials/animate-y";
import {
  SupportForm,
  supportFormSchema,
} from "../../../lib/validations/support-form";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { verifySupportForm } from "@/api/auth";
import Select from "react-select";

export default function Support() {
  //     interface issueTypes {
  //       value: string;
  //       label: string;
  //     }

  //   const issueTypes: issueTypes[] = [
  //     { value: "Payment Issue", label: "Payment Issue" },
  //     { value: "Account Issue", label: "Account Issue" },
  //     { value: "Other", label: "Other" },
  //   ];

  //   const handleSelectChange = (selectedOption: any) => {
  //     field.onChange(selectedOption);
  //   };

  const { register, control, handleSubmit } = useForm<SupportForm>({
    resolver: zodResolver(supportFormSchema),
  });

  const { field } = useController({ name: "issueType", control });

  const { isLoading, mutate } = useMutation({
    mutationFn: verifySupportForm,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });

  const supportFormHandler = (data: SupportForm) => {
    console.log("submit is supposed to run");
    mutate(data);
  };

  console.log(isLoading);

  //   return (
  //     <Container>
  //       <AppLayout title="Support Page">
  //         <AnimateY staggerAmount={0.35}>
  //           <div className="mb-24 flex flex-col items-center justify-center gap-y-6 lg:mb-28">
  //             <h2 className="headingTwo self-center">Help Center</h2>
  //             <p className="pageParagraphs w-[293px] text-center md:w-[740px]">
  //               Need help? Submit a request and have a support ticket opened for
  //               you
  //             </p>
  //           </div>
  //           <div>
  //             {/* <form onSubmit={handleSubmit(supportFormHandler)}> */}
  //             <form>
  //               {/* <div className="grid grid-cols-none gap-6 lg:grid-cols-2"> */}
  //               <div className="flex flex-col gap-y-2">
  //                 <label className="text-sm" htmlFor="name">
  //                   Email <span className="text-primary">*</span>
  //                 </label>
  //                 <input
  //                   required
  //                   placeholder="Enter Your Email Address..."
  //                   className="rounded-md border border-slate-400 p-3"
  //                   type="email"
  //                   id="email"
  //                   {...register("email")}
  //                 />
  //               </div>
  //               {/* <div className="flex flex-col gap-y-2">
  //                   <label className="text-sm" htmlFor="name">
  //                     Issue Type <span className="text-primary">*</span>
  //                   </label>
  //                   <Select
  //                     value={field.value}
  //                     onChange={handleSelectChange}
  //                     options={issueTypes}
  //                     className="rounded-md border border-slate-400 p-3"
  //                   />
  //                   <select
  //                     className="rounded-md border border-slate-400 p-3"
  //                     id="issueType"
  //                     {...register("issueType")}
  //                   >
  //                     <option value="Payment Issue">Payment Issue</option>
  //                     <option value="Account Issue">Account Issue</option>
  //                     <option value="Other">Other</option>
  //                   </select>
  //                 </div> */}
  //               <div className="flex flex-col gap-y-2">
  //                 <label className="text-sm" htmlFor="name">
  //                   Issue <span className="text-primary">*</span>
  //                 </label>
  //                 <input
  //                   required
  //                   placeholder="Whats the Issue?..."
  //                   className="rounded-md border border-slate-400 p-3"
  //                   type="text"
  //                   id="issue"
  //                   {...register("issue")}
  //                 />
  //               </div>
  //               <div className="flex flex-col gap-y-2">
  //                 <label className="text-sm" htmlFor="name">
  //                   Subject <span className="text-primary">*</span>
  //                 </label>
  //                 <input
  //                   required
  //                   placeholder="Subject of matter..."
  //                   className="rounded-md border border-slate-400 p-3"
  //                   type="text"
  //                   id="subject"
  //                   {...register("subject")}
  //                 />
  //               </div>
  //               <div className="flex flex-col gap-y-2 lg:col-span-2">
  //                 <label className="text-sm" htmlFor="name">
  //                   Description <span className="text-primary">*</span>
  //                 </label>
  //                 <textarea
  //                   id="description"
  //                   className=" h-[180px] rounded-md border border-slate-400 p-3"
  //                 />
  //               </div>
  //               {/* </div> */}
  //               <button
  //                 onClick={handleSubmit(supportFormHandler)}
  //                 type="submit"
  //                 className={` mt-8 w-full rounded-lg bg-orangePrimary px-4 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-orangePrimary/95`}
  //               >
  //                 {isLoading ? "Submitting" : "Submit Request"}
  //               </button>

  //               {/* <div className="m-auto mt-4 flex w-96 items-center gap-x-2"></div> */}
  //             </form>
  //           </div>
  //         </AnimateY>
  //       </AppLayout>
  //     </Container>
  //   );
  return (
    <div className="mx-auto my-auto max-w-sm text-center sm:max-w-md">
      <h1 className="pb-4 text-4xl font-bold leading-10">Login</h1>
      <p className="py-4 pb-8 text-lg font-medium text-slate-500">
        Enter your details to sign into the dashboard
      </p>

      <form onSubmit={handleSubmit(supportFormHandler)}>
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
            id="issue"
            placeholder="Enter Your Password..."
            className="bg-transparent placeholder:text-sm placeholder:text-secondary focus:outline-none"
            {...register("issue")}
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
