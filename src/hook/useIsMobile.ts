import { useCallback, useEffect, useState } from "react";

export default function useIsMobile(width: number) {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
        if (e.matches) {
            return setTargetReached(true);
        }
        setTargetReached(false);
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        // Register to an event to update state when max-width is reached
        media.addEventListener('change', updateTarget);
        
        // This is necessary when component using the hook first loads
        if (media.matches) {
            setTargetReached(true);
        }
        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
}