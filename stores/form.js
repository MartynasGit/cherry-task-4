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
        info: [...data], id: this.nextId++
      });
    },
  },
});
