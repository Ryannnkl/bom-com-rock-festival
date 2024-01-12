import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="flex w-full border-t items-center justify-between py-5 border-zinc-600">
			<div className="flex">
				<Link href="https://www.instagram.com/" className='px-3 py-2 rounded hover:bg-zinc-900 duration-150'>Instagram</Link>
			</div>

			<span>BCR Bom com Rock {new Date().getFullYear()}</span>
		</footer>
	);
};

export { Footer };
