import { defineStore } from "pinia";
export const useFormStore = defineStore("form", {
  state: () => {
    return {
      submitedData: [],
      nextId: 0,
    };
  },
  actions: {
    addData(data) {
      this.submitedData.push({
        id: this.nextId++,
        ...data,
      });
    },
    delete(givenItem) {
      this.submitedData = this.submitedData.filter((item) => {
        return item.id !== givenItem;
      });
    },
  },
});
