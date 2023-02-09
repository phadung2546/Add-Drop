import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useRigister = defineStore("enrollment", () => {
  const enrollment = ref([]);

  const getState = computed(() => enrollment.value);
  function storeState(state) {
    enrollment.value.push(state);
  }
  return { enrollment, getState, storeState };
});
