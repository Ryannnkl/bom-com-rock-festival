import Image from 'next/image';
import { BannerCard, Footer, MessageInfoCard } from './components';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5 gap-5 w-screen">
			<div className="flex items-center gap-3">
				<h1 className="header-font">BOM</h1>
				<Image src="/SKULL.png" width={3547 / 9} height={2541 / 9} alt="Caveira do Bom Conrock" />
				<h1 className="header-font relative ">
					CONROCK
					<span className="absolute font-medium text-sm top-[-100] right-0">BCR Castelo/2024</span>
				</h1>
			</div>
			<MessageInfoCard />
			<div className="flex flex-col w-full">
				<div className="flex">
					<h2 className="header-font2">Explorando a</h2>
					<Image
						src="/anjo2.png"
						width={1154 / 10}
						height={897 / 10}
						alt="Caveira do Bom Conrock"
					/>
				</div>
				<h2 className="header-font2">nossa galeria!</h2>
			</div>
			<BannerCard />
		</main>
	);
}
