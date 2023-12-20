
import '../globals.css'

import { BlogNav } from '@/components'

export const metadata = {
  title: 'Tecill Homes - Blog',
  description: 'Discover a fusion of style and functionality in all our residences, From sleek architectural lines to smart home features, each space has been thoughtfully crafted to reflect the epitome of contemporary living for those who seek both elegance and convenience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {/* <BlogNav /> */}
        {children}
      </body>
    </html>
  )
}
