import { useCallback, useState } from "react"

export const useToggle = (initialState: boolean): [boolean, (state?: boolean) => void] => {
    const [isActive, setIsActive] = useState(initialState);

    const toggleIsActive = useCallback((state?: boolean) => {
        if (!state) state = !isActive;
        setIsActive(state);
    }, [isActive]);

    return [isActive, toggleIsActive];
}