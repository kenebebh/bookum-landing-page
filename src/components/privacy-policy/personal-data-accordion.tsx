"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

export default function PersonalDataAccordion() {
  return (
    <div className="w-full">
      <Disclosure as={"div"} className="px-6 py-5 shadow-card">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg text-secondary sm:text-2xl">
                Proctecting Personal Data
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
              <Disclosure.Panel className="space-y-2 pt-4 text-sm text-accent sm:text-base">
                <p>
                  We use reasonable and appropriate physical, technical, and
                  organizational safeguards designed to promote the security of
                  our systems and protect the confidentiality, integrity,
                  availability, and resilience of personal data. Those
                  safeguards include:
                </p>
                <ol className="list-disc pl-4">
                  <li>
                    The encryption of personal data where we deem appropriate
                  </li>
                  <li>
                    Taking steps to ensure personal data is backed up and
                    remains available in the event of a security incident
                  </li>
                  <li>
                    Periodic testing, assessment, and evaluation of the
                    effectiveness of our safeguards
                  </li>
                </ol>

                <p>
                  However, no method of safeguarding information is completely
                  secure. While we use measures designed to protect personal
                  data, we cannot guarantee that our safeguards will be
                  effective or sufficient. In addition, you should be aware that
                  Internet data transmission is not always secure, and we cannot
                  warrant that information you transmit utilizing the App is or
                  will be secure.
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
