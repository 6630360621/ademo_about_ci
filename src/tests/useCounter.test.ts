import { renderHook, act } from '@testing-library/react';
import useCounter from "../hooks/features/homepage/useCounter.ts";

describe('useCounter', () => {
    it('should start with count 0 and val 1', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
        expect(result.current.val).toBe(1);
    });

    it('should increment by default val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(result.current.val);
    });

    it('should update val and increment by new val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(4);
        });
        expect(result.current.val).toBe(4);
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(4);
    });

    it('should increment multiple times with custom val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(2);
        });
        act(() => {
            result.current.increment();
        });
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(4);
    });

    it('should handle negative val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(-3);
        });
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(-3);
    });

    it('should handle zero val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(0);
        });
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(0);
    });
});