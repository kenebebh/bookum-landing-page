import React, { FormEvent, useState } from "react";
import axios from "axios";
import Loading from "../icons/loading";

export default function WaitlistForm({
  color = "text-secondary",
  id,
}: {
  color?: string;
  id: string;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [successState, setSuccessState] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingState(true);
    try {
      const response = await axios.post("/api/waitlist", { email });
      setLoadingState(false);
      setSuccessState(true);
      setError(false);
      setEmail("");
    } catch (err) {
      setError(true);
      setLoadingState(false);
    }
  };
  return (
    <>
      {!successState ? (
        <div>
          <form
            onSubmit={handleFormSubmit}
            id={id}
            className="flex flex-col items-center gap-x-8 gap-y-4 lg:flex-row lg:gap-y-0"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email"
              className="w-full rounded-md border border-[#ECF0F6] px-4 py-4 lg:w-2/5"
              type="email"
            />
            <button
              disabled={loadingState}
              className={`${
                loadingState ? "cursor-not-allowed" : "cursor-default"
              } w-full rounded-md bg-secondary px-5 py-4 text-white lg:w-auto`}
            >
              {loadingState ? <Loading /> : "Join waitlist"}
            </button>
          </form>
          {error && (
            <p className={`${color} mt-4 font-semibold`}>
              This email has already been added to our list!
            </p>
          )}
        </div>
      ) : (
        <div>
          <h3 className={`${color} text-lg font-semibold`}>
            Success! You'll be notified once we go live
          </h3>
        </div>
      )}
    </>
  );
}
