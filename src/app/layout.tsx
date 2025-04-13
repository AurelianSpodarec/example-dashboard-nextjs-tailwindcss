import type { Metadata } from "next";

import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Dashboard with TailwindCSS",
  description: "Created with best practices in mind",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
