
import './globals.css'
import { Navbar } from '@/components'


export const metadata = {
  title: 'Tecill Homes',
  description: 'Discover a fusion of style and functionality in all our residences, From sleek architectural lines to smart home features, each space has been thoughtfully crafted to reflect the epitome of contemporary living for those who seek both elegance and convenience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
