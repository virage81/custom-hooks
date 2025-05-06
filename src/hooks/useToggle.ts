import { useRef, useState } from 'react';

export const useToggle = <T extends string>(initial: T[]): [T, (value?: T) => void] => {
	const [value, setValue] = useState<T>(initial[0]);
	const index = useRef(0);

	const toggleValue = (providedValue?: T) => {
		if (!providedValue) {
			index.current = index.current === initial.length - 1 ? 0 : index.current + 1;
			setValue(initial[index.current]);
		} else {
			setValue(providedValue);

			index.current = initial.indexOf(providedValue);
		}
	};

	return [value, toggleValue];
};
