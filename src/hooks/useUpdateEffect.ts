import { useEffect, useRef } from 'react';

export function useUpdateEffect(callback: () => void, deps: unknown[]) {
	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}
		return callback();
	}, deps);
}
