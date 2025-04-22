import { create } from 'zustand';

interface Store {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
}

const useStore = create<Store>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set(() => ({ isOpen: false })),
}));

export const useMobileMenu = () => {
    const { isOpen, toggle, close } = useStore();

    return {
        isOpen,
        toggle,
        close,
    };
};
