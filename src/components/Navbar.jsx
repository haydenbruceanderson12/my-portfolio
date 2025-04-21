import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect (() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-sm border-b-1 border-transparent border-t-0 border-l-0 border-r-0"
            style={{ borderImage: 'linear-gradient(to right, #60a5fa, #9b4dca) 1' }}>
            <div className="mx-auto px-4 py-2 flex justify-between items-center">
                <div className="flex justify-center items-center h-16 z-50 text-3xl"> 
                    <a href="#home" className="font-mono font-bold text-white">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text leading-right text-transparent">hba</span>tech
                    </a>
                </div>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8 font-bold">
                    <a href="#home" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                        Home
                    </a>
                    <a href="#about" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent duration-300">
                        About
                    </a>
                    <a href="#projects" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}