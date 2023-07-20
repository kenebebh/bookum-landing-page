"use client";
import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

interface AccordionProps {
  title: string;
  body: string;
}

export default function Accordion({ title, body }: AccordionProps) {
  return (
    <div className=" w-full">
      <Disclosure as={"div"} className="px-6 py-5 shadow-card">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg text-secondary xs:pr-0 ss:pr-4 sm:text-2xl">
                {title}
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
                {body}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
