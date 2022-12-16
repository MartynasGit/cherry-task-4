import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => {
    return { data: {'name': '', 'email': '', 
vehicle: [], },
        storedData: [],
     };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addData() {
      this.storedData.push(this.data);
      this.data = [];
    },
  },
});