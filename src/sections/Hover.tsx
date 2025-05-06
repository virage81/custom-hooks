import { useHover } from '../hooks/useHover';

export function Hover() {
	const { hovered, ref } = useHover<HTMLDivElement>();

	return (
		<details className='flex flex-col gap-5'>
			<summary className='font-bold text-xl'>useHover hook implementation</summary>
			<div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>
		</details>
	);
}
