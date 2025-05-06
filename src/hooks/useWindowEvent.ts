import { useEffect } from 'react';

type EventListenerFunction<K extends keyof WindowEventMap> = (event: WindowEventMap[K]) => void;
type EventListenerOptions = boolean | AddEventListenerOptions;

export function useWindowEvent<K extends keyof WindowEventMap>(
	type: K,
	listener: EventListenerFunction<K>,
	options?: EventListenerOptions
): void {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener, options]);
}
