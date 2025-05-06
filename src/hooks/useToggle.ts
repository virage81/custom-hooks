import { useState } from 'react';

type UseToggleResponse = [boolean, (value?: boolean) => void];

export function useToggle(initialValue: boolean = false): UseToggleResponse {
	const [value, setValue] = useState(initialValue);

	function toggleValue(value?: boolean) {
		setValue(prev => (typeof value === 'boolean' ? value : !prev));
	}

	return [value, toggleValue];
}
