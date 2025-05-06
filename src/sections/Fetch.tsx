import { useFetch } from '../hooks/useFetch';

interface Post {
	id: number;
	title: string;
}

export function Fetch() {
	const { data, isLoading, error, refetch } = useFetch<Post>('https://jsonplaceholder.typicode.com/posts');

	return (
		<details className='flex flex-col gap-5'>
			<summary className='font-bold text-xl'>useFetch hook implementation</summary>
			<div>
				<button
					className='cursor-pointer'
					onClick={() =>
						refetch({
							params: {
								_limit: 3,
							},
						})
					}>
					Перезапросить
				</button>
			</div>
			<div>
				{isLoading && 'Загрузка...'}
				{error && 'Произошла ошибка'}
				{data && !isLoading && data.map(item => <p key={item.id}>{item.title}</p>)}
			</div>
		</details>
	);
}
