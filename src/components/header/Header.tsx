import Image from 'next/image'
import { BellDot, Search } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa6'
import Logo from '@/assets/logo.png'

export function Header() {
  return (
    <header className="sticky z-10 flex h-12 justify-between px-16 pt-12 text-zinc-50">
      <div className="flex items-center gap-16">
        <Image src={Logo} alt="Imagiflix Logo" />
        <ul className="flex gap-4">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Bombando</a>
          </li>
          <li>
            <a href="#">Minha lista</a>
          </li>
          <li>
            <a href="#">Navegar por idiomas</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />
        <span className="cursor-pointer px-4">Infantil</span>
        <BellDot className="cursor-pointer" />
        <div className="flex cursor-pointer items-center">
          <Image
            width={32}
            height={32}
            src="https://github.com/omaxfernandes.png"
            alt="User avatar"
            className="rounded-lg"
          />
          <FaCaretDown />
        </div>
      </div>
    </header>
  )
}
