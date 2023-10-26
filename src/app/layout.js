import { poppins } from '@/configs/fonts';
import '../../styles/globals.css';
import Header from '@/Components/Header';
import { Footer } from '@/Components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />

        {children}

        <Footer />
      </body>
    </html >
  )
}