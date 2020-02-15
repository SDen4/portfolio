export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        SET_USER: (state, user) => (state.user = user)
    },
    getters: {
        userIsLoggedIn: state => {
            const userObj = state.user;
            const userObjectIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;
console.log('userObj = ' + userObj);

            return userObjectIsEmpty === false;
        }
    }
};