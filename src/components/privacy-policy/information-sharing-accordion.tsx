"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

export default function InformationSharingAccordion() {
  return (
    <div className="w-full">
      <Disclosure as={"div"} className="px-6 py-5 shadow-card">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg capitalize text-secondary sm:text-2xl">
                Information Sharing
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
                  We may share your information in the following circumstances:
                </p>
                <div>
                  <h4 className="font-semibold">Service Providers:</h4>
                  <p>
                    We may engage third-party service providers to perform
                    functions on our behalf, such as hosting, data analysis,
                    customer support, and marketing assistance. These service
                    providers will have access to your information only as
                    necessary to perform their respective functions and are
                    obligated to maintain its confidentiality.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Legal Requirements:</h4>
                  <ol className="list-disc pl-4">
                    <li>
                      We may disclose your information to comply with applicable
                      laws, regulations, legal processes, or enforceable
                      governmental requests.
                    </li>
                    <li>
                      To protect our rights, privacy, safety, or property, as
                      well as yours and others.
                    </li>
                  </ol>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
