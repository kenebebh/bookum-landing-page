"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

export default function ApplicablilityDisclosure() {
  return (
    <div className="w-full">
      <Disclosure as={"div"} className="px-6 py-5 shadow-card">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg text-secondary sm:text-2xl">
                Applicability of this Privacy Notice
              </span>
              {open ? (
                <div className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full bg-secondary">
                  <Minus />
                </div>
              ) : (
                <div className="flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full bg-secondary">
                  <Plus />
                </div>
              )}
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="pt-4 text-sm text-accent sm:text-base">
                <ol className="list-disc pl-4">
                  <li>
                    This Privacy Notice is subject to the Terms of Service and
                    Acceptable Use Policy that govern your use of the App.{" "}
                  </li>
                  <li>
                    This Privacy Notice applies regardless of the means used to
                    access or provide information through the App. 
                  </li>
                  <li>
                    This Privacy Notice does not apply to information from or
                    about you collected by any third-party services,
                    applications, or advertisements associated with, or websites
                    linked from, the App.
                  </li>
                  <li>
                    The collection or receipt of your information by such third
                    parties is subject to their own privacy policies,
                    statements, and practices, and under no circumstances are we
                    responsible or liable for any third party’s compliance
                    therewith.
                  </li>
                </ol>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
