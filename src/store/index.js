import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex);

const createStore = new Vuex.Store({
    state: {
        openProject: false,

    },
    /*mutations: {
        setToken(store, token){
            state.token = token;
        }
    },*/
    actions: {
        openNewProject({commit, state}) {
            state.openProject = !state.openProject;
        }
        // getToken({ commit, state }){
        //     state.token = token;
        // },
    },
    modules: {
        // auth: require('./modules/auth').default
    }
});


// createStore.dispatch('initFirebase');
// createStore.dispatch('auth/checkAuth');

export default createStore