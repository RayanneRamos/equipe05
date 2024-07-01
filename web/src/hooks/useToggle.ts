import { useState } from 'react';

export function useToggle(initialValue = false) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleBurguerClick = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return { isSidebarOpen, handleBurguerClick, handleSidebarClose };
}
