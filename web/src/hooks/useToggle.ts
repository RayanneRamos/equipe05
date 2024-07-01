import { useState } from 'react';

export function useToggle(initialValue = false) {
    const [isSidebarOpen, setSidebarOpen] = useState(initialValue);

    const handleBurguerClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return { isSidebarOpen, handleBurguerClick };
}
