import {defineStore} from "pinia";
import {ref} from "vue";

const useUserStore = defineStore('user',() => {
    const count = ref(0);
    const persist = true

    return {count, persist}
});

export default useUserStore;