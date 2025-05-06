import { useViewportSize } from '../hooks/useViewportSize';

export function Viewport() {
	const { height, width } = useViewportSize();

	return (
		<details className='flex flex-col gap-5'>
			<summary className='font-bold text-xl'>useViewportSize hook implementation</summary>
			<p>
				Width: {width}, height: {height}
			</p>
		</details>
	);
}
