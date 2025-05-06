import { useWindowScroll } from '../hooks/useWindowScroll';

export function Scroll() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<details className='flex flex-col gap-5'>
			<summary className='font-bold text-xl'>useWindowScroll implementation</summary>
			<p>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button className='border border-white/50 cursor-pointer p-3' onClick={() => scrollTo({ y: 0 })}>
				Scroll to top
			</button>
		</details>
	);
}
