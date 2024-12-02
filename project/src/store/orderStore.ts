import { create } from 'zustand';

interface OrderState {
  quantity: number;
  setQuantity: (quantity: number) => void;
  orderId: string | null;
  setOrderId: (orderId: string) => void;
  resetOrder: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  quantity: 1,
  setQuantity: (quantity) => set({ quantity }),
  orderId: null,
  setOrderId: (orderId) => set({ orderId }),
  resetOrder: () => set({ quantity: 1, orderId: null })
}));