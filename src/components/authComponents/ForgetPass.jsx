"use client";

import Link from "next/link";
import { Card } from "@heroui/react";
import { ArrowLeft, Lock } from "@gravity-ui/icons";
import "@/styles/forgetpass.css";

const ForgetPass = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-12 lg:py-20">
      <div className="forgot-password-card-wrapper w-full max-w-lg relative">
        {/* Decorative tile pattern behind the card */}
        <div className="forgot-password-pattern absolute inset-0 -z-10 rounded-[var(--tv-radius-xl)] opacity-20" />

        <Card
          className="bg-[var(--tv-bg-card)] shadow-[var(--tv-shadow-card)] rounded-[var(--tv-radius-xl)] border border-[var(--tv-border)] backdrop-blur-sm"
          radius="lg"
        >
          <Card.Header className="flex flex-col items-center gap-3 pt-8 pb-0 px-6 sm:px-8">
            <div className="w-14 h-14 rounded-full bg-[var(--tv-color-primary-muted)] flex items-center justify-center">
              <Lock className="w-7 h-7 text-[var(--tv-color-primary)]" />
            </div>
            <h2 className="font-[var(--tv-font-display)] text-3xl sm:text-4xl font-bold text-[var(--tv-text-primary)] text-center leading-tight">
              Forgot your password?
            </h2>
            <p className="font-[var(--tv-font-body)] text-base text-[var(--tv-text-body)] text-center max-w-xs">
              We’d say{" "}
              <em>“be more like our tiles — never crack under pressure”</em>,
              but that’s not helpful right now. Let’s just fix it.
            </p>
          </Card.Header>

          <Card.Content className="px-6 sm:px-8 pb-8 pt-6 flex flex-col gap-6">
            {/* Replaced input section with Service Unavailable Notice */}
            <div className="w-full flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[var(--tv-border)] rounded-[var(--tv-radius-md)] bg-[var(--tv-bg-page)]/50">
              <p className="font-[var(--tv-font-body)] text-base font-semibold text-amber-600 dark:text-amber-500 mb-1">
                Service currently unavailable.
              </p>
              <p className="font-[var(--tv-font-body)] text-xs text-[var(--tv-text-muted)] max-w-xs">
                Our password recovery server is down for scheduled maintenance.
                Please check back later.
              </p>
            </div>

            <div className="flex justify-center mt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 font-[var(--tv-font-body)] text-sm font-medium text-[var(--tv-color-primary)] hover:text-[var(--tv-color-primary-hover)] underline-offset-2 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to login
              </Link>
            </div>
          </Card.Content>
        </Card>

        {/* Humorous footnote */}
        <p className="text-center mt-6 font-[var(--tv-font-body)] text-xs text-[var(--tv-text-muted)]">
          Still can’t remember? Try touching a tile. They never forget.
        </p>
      </div>
    </main>
  );
};

export default ForgetPass;
