import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const itemList = reactive([
    {
      id: 1,
      name: 'banana',
      price: 1000,
    },
    {
      id: 2,
      name: 'orange',
      price: 3000,
    },
    {
      id: 3,
      name: 'mango',
      price: 5000,
    },
    {
      id: 4,
      name: 'apple',
      price: 4000,
    },
  ]);

  const itemCart = reactive([]);

  const outCart = (id) => {
    const indexToRemove = itemCart.findIndex((itemId) => itemId === id);
    if (indexToRemove !== -1) {
      itemCart.splice(indexToRemove, 1);
    }
  };

  return { itemList, itemCart, outCart };
});
