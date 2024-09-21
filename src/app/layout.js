
import Header from '@/components/Header';
import './globals.css';
import Providers from './Providers';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; 

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Movies Series',
  description: 'this app is using IMDB movies clone',
};

export default function RootLayout({ children}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Header />
        <Navbar/>
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
