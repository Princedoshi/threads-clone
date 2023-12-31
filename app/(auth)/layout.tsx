
import {
  ClerkProvider,
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}