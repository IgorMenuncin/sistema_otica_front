import Menu from '../components/Menu'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-4">
        <div className="col-span-1">
          <Menu />
        </div>
        <div className="col-span-3 mx-10 mt-5">
          {children}
        </div>
      </body>
    </html>
  )
}
