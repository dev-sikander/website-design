import { poppins } from '@/configs/fonts';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html >
  )
}