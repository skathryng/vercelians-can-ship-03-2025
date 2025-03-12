import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "For the Love of Dogs",
  description: "A community for dog lovers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="font-bold text-xl">DogLovers</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-slate-600 hover:text-slate-900">
            Home
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900">
            Discover
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900">
            Community
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900">
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="font-bold text-xl">DogLovers</span>
          </div>
          <p className="text-slate-400">Connecting dog lovers worldwide since 2023.</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Discover Dogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Events
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#" className="hover:text-white">
                Dog Care Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Training Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Health & Nutrition
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Adoption
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Connect</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
        <p>© 2023 DogLovers. All rights reserved.</p>
      </div>
    </footer>
  )
}

