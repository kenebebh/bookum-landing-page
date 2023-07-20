"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

export default function InformationUseAccordion() {
  return (
    <div className="w-full">
      <Disclosure as={"div"} className="px-6 py-5 shadow-card">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg capitalize text-secondary sm:text-2xl">
                How We Use Collected Information
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
                  We may use the information we collect for the following
                  purposes:
                </p>
                <div>
                  <h4>Personalization:</h4>
                  <ol className="list-disc pl-4">
                    <li>To personalize your experience on the App.</li>
                    <li>
                      To suggest connections or content that may be of interest
                      to you.
                    </li>
                    <li>
                      To provide you with relevant notifications and updates.
                    </li>
                  </ol>
                </div>

                <div>
                  <h4>Communication:</h4>
                  <ol className="list-disc pl-4">
                    <li>
                      To communicate with you about your account, activity, and
                      updates on the App.
                    </li>
                    <li>
                      To respond to your comments, questions, and requests.
                    </li>
                    <li>
                      To send you marketing and promotional messages (if you
                      have opted in to receive them).
                    </li>
                  </ol>
                </div>

                <div>
                  <h4>Analytics and Improvements:</h4>
                  <ol className="list-disc pl-4">
                    <li>
                      To analyze and improve the performance, functionality, and
                      usability of the App.
                    </li>
                    <li>
                      To monitor and measure usage metrics, such as the number
                      of active users and engagement levels.
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
