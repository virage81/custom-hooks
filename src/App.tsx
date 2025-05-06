import { Demo } from './sections/Fetch';
import { Hover } from './sections/Hover';
import { LocalStorage } from './sections/LocalStorage';

export function App() {
	return (
		<div className='p-10 flex flex-col gap-10'>
			<h1 className='text-4xl font-bold capitalize text-center'>Custom Hooks training</h1>
			<main className='flex flex-col items-center justify-center gap-5'>
				<Demo />
				<LocalStorage />
				<Hover />
			</main>
		</div>
	);
}
