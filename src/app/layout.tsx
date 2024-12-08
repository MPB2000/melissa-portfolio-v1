import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "Melissa's Portfolio",
  description: "Inspired By My Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        }}
      >
        <AntdRegistry> {children}</AntdRegistry>
      </body>
    </html>
  );
}
