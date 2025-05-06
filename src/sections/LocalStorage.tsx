import { useLocalStorage } from '../hooks/useLocalStorage';

export function LocalStorage() {
	const [value, { setItem, removeItem }] = useLocalStorage('some-key');

	return (
		<details className='flex flex-col gap-5'>
			<summary className='font-bold text-xl'>useLocalStorage hook implementation</summary>

			<div className='flex flex-col gap-5'>
				<p>Значение из LocalStorage: {value}</p>

				<div className='flex gap-5 items-center'>
					<button className='cursor-pointer border border-white/50 p-3' onClick={() => setItem('new storage value')}>
						Задать значение
					</button>
					<button className='cursor-pointer border border-white/50 p-3' onClick={() => removeItem()}>
						Удалить значение
					</button>
				</div>
			</div>
		</details>
	);
}
