import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: "청력 테스트",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={noto_sans_kr.className} style={{ backgroundColor: "F5F5F5" }}>{children}</body>
    </html>
  );
}
