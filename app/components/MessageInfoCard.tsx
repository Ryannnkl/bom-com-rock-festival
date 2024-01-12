import Image from 'next/image';

const MessageInfoCard = () => {
	return (
		<section className="flex bg-primary items-center justify-center flex-col gap-20 w-full p-24 relative">
			<Image className='absolute opacity-25' src="/anjo1.png" width={200 * 4} height={553 * 4} alt="Anjo"/>
			<h2 className="text-5xl font-bold text-center text-black" style={{ lineHeight: '180%' }}>
				we are dynamic and forward-thinking music label dedicated to showcasing and nurturing
				extraordinary talent across a diverse range of genres.
			</h2>
			<div className="flex flex-col items-center">
				<Image src="/SKULL.png" width={3547 / 65} height={2541 / 65} alt="Caveira do Bom Conrock" />
				<span className="text-xl text-black">BCR</span>
			</div>
		</section>
	);
};

export { MessageInfoCard };
