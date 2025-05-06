import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface Params {
	params: Record<string, number | string>;
}

type UseFetchReturnValue<T> = {
	data: T[];
	isLoading: boolean;
	error: string | null;
	refetch: (data: Params) => void;
};
export const useFetch = <T>(uri: string): UseFetchReturnValue<T> => {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [queryParams, setQueryParams] = useState<Params | null>(null);

	const request = useCallback(async () => {
		try {
			setLoading(true);

			const { data, status } = await axios.get(uri, { params: queryParams?.params });
			if (status !== 200) throw Error(`Error while fetching url: ${uri}`);

			setData(data);
			setError(null);
		} catch (error) {
			const e = error as Error;
			setError(e.message);
			throw new Error(e.message);
		} finally {
			setLoading(false);
		}
	}, [uri, queryParams]);

	const refetch = (data: Params) => {
		setQueryParams(data);
	};

	useEffect(() => {
		request();
	}, [uri, request, queryParams]);

	return { data, isLoading: loading, error, refetch };
};
