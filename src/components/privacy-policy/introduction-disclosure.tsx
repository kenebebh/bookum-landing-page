"use client";

import { Disclosure, Transition } from "@headlessui/react";
import Plus from "../icons/plus";
import Minus from "../icons/minus";

export default function IntroductionDisclosure() {
  return (
    <div className="w-full">
      <Disclosure
        as={"div"}
        className="rounded-lg border border-[#F8FAFC] px-6 py-5 shadow-card"
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left">
              <span className="font-heading text-body-lg text-secondary sm:text-2xl">
                Introduction
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
              {/* <Disclosure.Panel className="space-y-4 pt-4 text-accent">
                <div className="space-y-6 text-sm sm:text-base">
                  <p>
                    This Privacy Policy governs the manner in which Bookum Inc.
                    (“Bookum”, "we," "us," or "our") collects, uses, maintains,
                    and discloses information collected from users (referred to
                    as "users," "you," or "your") of the Bookum Inc. mobile
                    application (referred to as the "App").
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      INFORMATION WE COLLECT
                    </h3>
                    <p>
                      We collect information that identifies, relates to,
                      describes, is reasonably capable of being associated with,
                      or could reasonably be linked, directly or indirectly,
                      with a particular user or household (“personal data”).
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      1.1 Categories of Personal Data We Collect
                    </h3>
                    <p>
                      The types of personal data we collect about you depends on
                      your interactions with us and your use of the App. We
                      collect the below categories of personal data from our
                      users:
                    </p>

                    <ol className="list-disc pl-4">
                      <li>
                        Identifiers such as a real name, alias, postal address,
                        internet protocol address, email address, account name,
                        social security number or EIN Tax ID Number, driver’s
                        license number, or other similar identifiers.
                      </li>
                      <li>
                        Personal information categories listed in the Colorado
                        Open Records Act, (CORA) C.R.S. § 24-72-201 to 206.
                      </li>
                      <li>
                        Characteristics of protected classifications under
                        Colorado or federal law.
                      </li>
                      <li>Professional or employment-related information.</li>
                    </ol>
                    <p>
                      We will not collect additional categories of personal data
                      other than those categories listed above. If we intend to
                      collect additional categories of personal data, we will
                      provide you with a new notice at or before the time of
                      collection.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      1.2 How We Use Your Personal Data
                    </h3>
                    <p>
                      We strive to ensure that the content can be enjoyed by
                      everyone, and to keep the content appropriate, tasteful
                      and lawful. To do that, we collect and process your
                      personal data for the following business purposes:
                    </p>
                    <ol className="list-disc pl-4">
                      <li>
                        Developing, improving, operating, providing, predicting,
                        or performing, including maintaining or servicing
                        accounts, enhancing the App and your experience with
                        them, providing customer service, processing or
                        fulfilling transactions, verifying your identity, and
                        processing payments.
                      </li>
                      <li>
                        Communicating with you by email about the App, verifying
                        your identity, responding to support inquiries or,
                        sharing information about the App.
                      </li>
                      <li>
                        Auditing related to a current interaction with the user
                        and concurrent transactions.
                      </li>
                      <li>
                        Detecting security incidents, protecting against
                        malicious, deceptive, fraudulent, or illegal activity,
                        and prosecuting those responsible for that activity.
                      </li>
                      <li>
                        Debugging to identify and repair errors that impair
                        existing intended functionality.
                      </li>
                      <li>
                        Undertaking internal research for technological
                        development and demonstration.
                      </li>
                      <li>
                        Undertaking activities to verify or maintain the quality
                        or safety of the App owned, manufactured, manufactured
                        for, or controlled by us, and to improve, upgrade, or
                        enhance the App owned, manufactured, manufactured for,
                        or controlled by us.
                      </li>
                      <li>
                        Complying with applicable laws, regulations, rules and
                        requests of relevant law enforcement and/or other
                        governmental agencies, or for other purposes, as
                        permitted or required by law.
                      </li>
                      <li>
                        Enforcing our Terms of Service and other usage policies.
                      </li>
                      <li>
                        As necessary or appropriate to protect the rights,
                        property, and safety of our users, us, and other third
                        parties.
                      </li>
                    </ol>
                    <p>
                      We will not use the personal data we collected for
                      materially different, unrelated, or incompatible purposes
                      without providing you with notice and obtaining your
                      consent.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      1.3 How We Obtain Your Personal Data
                    </h3>
                    <p>
                      We collect your personal data from the following
                      categories of sources: 
                    </p>

                    <ol className="list-disc pl-4">
                      <li>
                        Directly from you. When you provide it to us directly to
                        open an account and use the App, or when you update the
                        information in your account.
                      </li>
                      <li>
                        Automatically or indirectly from you. For example,
                        through and as a result of your use of and access to the
                        App. We also collect IP addresses and browser types from
                        the devices you use.
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      1.4 Legal Bases for Processing
                    </h3>
                    <p>
                      We process personal data for, or based on, one or more of
                      the following legal bases:
                    </p>

                    <ol className="list-disc pl-4">
                      <li>
                        Performance of a Contract. By using the App, you have
                        contracted with us through the Terms of Service, and we
                        will process certain personal data to perform under that
                        contract.
                      </li>
                      <li>
                        Legitimate Interests. We may process personal data for
                        our legitimate interests, including complying with any
                        applicable law, rule or regulation, investigation or
                        remedy; enforcing our Terms of Service; protecting our,
                        our users' or others' rights, property and safety; and
                        detecting and resolving any fraud or security concerns.
                      </li>
                      <li>
                        Compliance with Legal Obligations and Protection of
                        Individuals. We may process personal data to comply with
                        our legal obligations, including as required by valid
                        legal process, governmental request, and to protect
                        those individuals who use our App and others.
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      YOUR RIGHTS REGARDING PERSONAL DATA
                    </h3>
                    <p>
                      You have certain rights regarding the collection and
                      processing of personal data. You may exercise these
                      rights, to the extent they apply to you, by contacting us
                      at the information provided at the end of this Privacy
                      Notice. Your rights vary depending on the laws that apply
                      to you, but may include:
                    </p>

                    <ol className="list-disc pl-4">
                      <li>
                        The right to know whether, and for what purposes, we
                        process your personal data;
                      </li>
                      <li>
                        The right to be informed about the personal data we
                        collect and/or process about you;
                      </li>
                      <li>
                        The right to access, modify, and correct personal data
                        about you;
                      </li>
                      <li>
                        The right to know with whom we have shared your personal
                        data with, for what purposes, and what personal data has
                        been shared (including whether personal data was
                        disclosed to third parties for their own direct
                        marketing purposes);
                      </li>
                      <li>
                        The right to withdraw your consent, where processing of
                        personal data is based on your consent; and
                      </li>
                      <li>
                        The right to lodge a complaint with a supervisory
                        authority located in the jurisdiction of your habitual
                        residence, place of work, or where an alleged violation
                        of law occurred.
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-secondary">
                      2.1 Accessing, Modifying, Rectifying, and Correcting
                      Collected Personal Data
                    </h3>
                    <p>
                      We strive to maintain the accuracy of any personal data
                      collected from you, and will try to respond promptly to
                      update our records when you tell us the information in our
                      records is not correct. However, we must rely upon you to
                      ensure that the information you provide to us is complete,
                      accurate, and up-to-date, and to inform us of any
                      changes. 
                      <br />
                      <br />
                      Please review all of your information carefully before
                      submitting it to us. Any updates or corrections to your
                      information may be made through your account settings.
                      <br />
                      <br />
                      Depending on the laws that apply to you, you may obtain
                      from us certain personal data in our records. If you wish
                      to access, review, or make any changes to personal data
                      you have provided to us through the App, please contact us
                      at the information provided at the end of this Privacy
                      Notice. We reserve the right to deny access as permitted
                      or required by applicable law.
                    </p>
                  </div>
                </div>
              </Disclosure.Panel> */}

              <Disclosure.Panel className="space-y-4 pt-4 text-accent">
                <p className="space-y-6 text-sm sm:text-base">
                  This Privacy Policy governs the manner in which Bookum Inc.
                  ("we," "us," or "our") collects, uses, maintains, and
                  discloses information collected from users (referred to as
                  "users," "you," or "your") of the Bookum Inc. mobile
                  application (referred to as the "App").
                </p>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
