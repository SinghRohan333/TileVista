"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/libs/auth-client";
import UpdateProfileForm from "@/components/profileComponents/UpdateProfileForm";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="profile-loading">
        <div className="profile-loading-inner">
          <div
            className="skeleton"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "0 auto 1rem",
            }}
          />
          <div
            className="skeleton"
            style={{
              width: "160px",
              height: "24px",
              borderRadius: "6px",
              margin: "0 auto 0.5rem",
            }}
          />
          <div
            className="skeleton"
            style={{
              width: "200px",
              height: "16px",
              borderRadius: "4px",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    );
  }

  if (!session) return null;

  return <UpdateProfileForm session={session} />;
}
