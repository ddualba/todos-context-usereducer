import React from 'react';
import { useEffect } from 'react';

function useKeyboardEvent(key, callback) {
	useEffect(() => {
		const handler = function(event) {
			if (event.key === key) {
				callback();
			}
		};
		window.addEventListener('keydown', handler);
		return () => {
			window.removeEventListener('keydown', handler);
		};
	}, []);
}
export default function Component(props) {
	useKeyboardEvent('Escape', () => {
		alert('Escaped');
	});
	return <span />;
}
