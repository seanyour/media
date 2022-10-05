import useUserStore from "store/modules/user";

const useStore = () => {
    return {
        user: useUserStore(),
    }
};

export default useStore;