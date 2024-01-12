import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { Footer } from './components';

const inter = Inter({ subsets: ['latin'] });
const dm_serif_display = DM_Serif_Display({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Bom com Rock | BCR',
	description: 'Bom com rock festival de Rock em bom conselho.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" data-theme="mytheme">
			<body className={inter.className + ' bg-black text-white ' + dm_serif_display.className} data-theme="mytheme">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
