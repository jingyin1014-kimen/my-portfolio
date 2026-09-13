import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "浦婧崟｜Event & Brand Marketing",
  description: "浦婧崟的活动策划、品牌营销与内容创作个人作品集。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
