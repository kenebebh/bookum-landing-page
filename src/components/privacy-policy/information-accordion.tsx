"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

export default function InformationAccordion() {
  return (
    <div className="w-full">
      <Disclosure as={"div"} className="px-6 py-5 shadow-card">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg capitalize text-secondary sm:text-2xl">
                Information we collect
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
                  We may collect the following types of information when you use
                  our App:
                </p>
                <div>
                  <h4>Personal Information:</h4>
                  <ol className="list-disc pl-4">
                    <li>
                      Your name, email address, username, and password when you
                      create an account.
                    </li>
                    <li>
                      Profile information, including profile picture and any
                      other information you choose to provide.
                    </li>
                  </ol>
                </div>

                <div>
                  <h4>Usage Information:</h4>
                  <ol className="list-disc pl-4">
                    <li>
                      Information about your interactions with the App, such as
                      posts, comments, likes, and shares.
                    </li>
                    <li>
                      Device information, including your device type, operating
                      system, unique device identifiers, IP address, and mobile
                      network information.
                    </li>
                    <li>
                      Log data, including details about your use of the App,
                      browser type, pages viewed, and the date and time of your
                      visit.
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
