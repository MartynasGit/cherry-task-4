import { defineStore } from "pinia";
export const useInputStore = defineStore("slug-input", {
  state: () => {
    return {
      submitedData: [],
      nextId: 0,
    };
  },
  actions: {
    addData(text) {
      this.submitedData.push({
        id: this.nextId++,
        text,
      });
    },
    delete(givenItem) {
      this.submitedData = this.submitedData.filter((item) => {
        return item.id !== givenItem;
      });
    },
  },
});
