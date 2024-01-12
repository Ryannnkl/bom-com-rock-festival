import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return(
    <header className="flex items-center justify-between px-5 py-3">
      <ul>
        <li>
          <Link href="#sobre">Sobre</Link>
        </li>
      </ul>
			<Image src="/SKULL.png" width={3547 / 65} height={2541 / 65} alt="Caveira do Bom Conrock" />
      <Link href="https://wa.me/+5587999894811" className="text-black bg-primary px-4 py-2 rounded-3xl">
        Contato
      </Link>
    </header>
  )
}