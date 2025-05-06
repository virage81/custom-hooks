import { useEffect, useRef, useState } from 'react';

export function useThrottle<T>(value: T, interval: number = 500) {
	const [throttledValue, setThrottledValue] = useState(value);
	const lastExecuted = useRef(Date.now());

	useEffect(() => {
		if (Date.now() >= lastExecuted.current + interval) {
			lastExecuted.current = Date.now();
			setThrottledValue(value);
		} else {
			const timeoutId = setTimeout(() => {
				lastExecuted.current = Date.now();
				setThrottledValue(value);
			}, interval);

			return () => clearTimeout(timeoutId);
		}
	}, [value, interval]);

	return throttledValue;
}
