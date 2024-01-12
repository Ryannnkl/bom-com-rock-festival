import Image from 'next/image';

const BannerCard = () => {
	return (
		<section className="flex bg-red-600 items-center justify-center flex-col gap-20 w-full p-6 text-8xl font-bold text-center text-black uppercase">
			<div className="flex ">
				<h2 className="display-font">Kick the</h2>
				<div className="flex">
					<Image src="/star.png" width={100} height={100} alt="Star" />
					<Image src="/star.png" width={100} height={100} alt="Star" />
				</div>
			</div>
			<div className="flex">
				<div className="flex"></div>
				<h2>Double</h2>
			</div>
			<div className="flex">
				<h2>Standard</h2>
			</div>
		</section>
	);
};

export { BannerCard };
