import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import "./reset.css";
import "./globals.scss";
import { Noto_Sans_JP, Noto_Serif_JP, Ysabeau } from 'next/font/google';

// フォント設定
const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  // 251014現在　Next.js v15は、『japanese』に対応してない。
  // subsets: ['latin', 'japanese'],
  display: 'swap',
})

const notoSerif = Noto_Serif_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const ysabeau = Ysabeau({
  weight: ['200', '500'],
  subsets: ['latin'],
  display: 'swap',
})

// meta要素の設定
export const metadata = {
  title: 'Studio Quad9 - Portfolio',
  description: '動画・写真クリエイターのポートフォリオサイト',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
      lang="ja"
      className={`
        ${notoSans.className}
        ${notoSerif.className}
        ${ysabeau.className}
      `}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
