import { useToggle } from '../hooks/useToggle';

export function Toggle() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

	return (
		<details className='flex flex-col gap-5'>
			<summary className='font-bold text-xl'>useToggle hook implementation</summary>
			<p>Value: {value}</p>
			<button className='border border-white/50 cursor-pointer p-3' onClick={() => toggle('orange')}>
				Set to 'orange'
			</button>
			<button className='border border-white/50 cursor-pointer p-3' onClick={() => toggle()}>
				toggle
			</button>
			<button className='border border-white/50 cursor-pointer p-3' onClick={() => toggle('teal')}>
				Set to 'teal'
			</button>
		</details>
	);
}
