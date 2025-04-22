import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import { cn } from "#utils/classnames";

import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const hauss = localFont({
  src: [
    {
      path: "../fonts/ALSHauss-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ALSHauss-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hauss",
});

const sirius = localFont({
  src: [
    {
      path: "../fonts/ALSSirius-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ALSSirius-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ALSSirius-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sirius",
});

export const metadata: Metadata = {
  title: "Diagnocat - transform your clinical practice",
  description:
    "All-in-one artificial intelligence software for 2D and 3D dentistry Improve your workflow with the Diagnocat experience, adding enhanced clarity to your dental images and reports",
};

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={cn([hauss.variable, sirius.variable, "antialiased"])}>
        <div>{children}</div>
      </body>
    </html>
  );
}
