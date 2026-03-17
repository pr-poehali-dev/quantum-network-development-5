import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Инструкции", href: "#instructions" },
    { label: "Схемы", href: "#schemes" },
    { label: "Troubleshooting", href: "#troubleshooting" },
    { label: "FAQ", href: "#faq" },
    { label: "Форум", href: "#forum" },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled ? "max-w-4xl px-2 border-white/20 shadow-lg" : "max-w-6xl px-4 border-transparent shadow-none"
        } py-2`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          background: isScrolled ? "rgba(6, 13, 31, 0.85)" : "transparent",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${isScrolled ? "ml-4" : ""}`} href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Icon name="Satellite" size={18} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">TrackPro</span>
          </div>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="relative px-4 py-2 text-white/60 hover:text-white transition-colors cursor-pointer"
              href={link.href}
            >
              <span className="relative z-20">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="rounded-lg font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 text-center px-4 py-2 text-sm border bg-gradient-to-r from-blue-600 to-blue-800 border-blue-400/30 text-white hover:from-blue-500 hover:to-blue-700"
          >
            <Icon name="LogIn" size={15} />
            Войти
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled ? "border-white/20 shadow-lg" : "border-transparent shadow-none"
        }`}
        style={{
          background: isScrolled ? "rgba(6, 13, 31, 0.85)" : "transparent",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a className="flex items-center justify-center gap-2" href="/">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <Icon name="Satellite" size={18} className="text-white" />
          </div>
          <span className="text-white font-bold">TrackPro</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div
            className="absolute top-24 left-4 right-4 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6"
            style={{ background: "rgba(6, 13, 31, 0.9)" }}
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left px-4 py-3 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/10 pt-4 mt-2">
                <a
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-center rounded-lg transition-all duration-200 border bg-gradient-to-r from-blue-600 to-blue-800 border-blue-400/30 text-white"
                >
                  <Icon name="LogIn" size={17} />
                  Войти в приложение
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
