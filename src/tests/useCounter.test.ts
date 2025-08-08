const { renderHook, act } = require('@testing-library/react-hooks');
const { useCounter } = require('./useCounter');

test('should increment counter', () => {
	const { result } = renderHook(() => useCounter());
	act(() => {
		result.current.increment();
	});
	expect(result.current.count).toBe(1);
});

test('should decrement counter', () => {
	const { result } = renderHook(() => useCounter());
	act(() => {
		result.current.decrement();
	});
	expect(result.current.count).toBe(-1);
});

test('should reset counter', () => {
	const { result } = renderHook(() => useCounter());
	act(() => {
		result.current.increment();
		result.current.reset();
	});
	expect(result.current.count).toBe(0);
});