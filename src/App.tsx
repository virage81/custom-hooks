import { Fetch } from './sections/Fetch';
import { Hover } from './sections/Hover';
import { LocalStorage } from './sections/LocalStorage';
import { Scroll } from './sections/Scroll';
import { Viewport } from './sections/Viewport';

export function App() {
	return (
		<div className='p-10 flex flex-col gap-10'>
			<h1 className='text-4xl font-bold capitalize text-center'>Custom Hooks training</h1>
			<main className='flex flex-col items-center justify-center gap-5'>
				<Fetch />
				<LocalStorage />
				<Hover />
				<Viewport />
				<Scroll />
			</main>
		</div>
	);
}
