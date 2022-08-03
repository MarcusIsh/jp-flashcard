export default {
    namespaced: true,
    state: {
        originLanguage: '',
        transLanguage: ''
    },
    getters: {
        originLang (state) {
            return `${state.originLanguage}`
        },
        transLang (state) {
            return `${state.transLanguage}`
        }
    },
    actions: {
        setOriginLanguage (context, language) {
            let originLanguage = context.state.originLanguage;
            originLanguage = language;
            context.commit('SET_ORIGIN_LANGUAGE', originLanguage);
        },
        setTransLanguage (context, language) {
            let transLanguage = context.state.transLanguage;
            transLanguage = language;
            context.commit('SET_TRANS_LANGUAGE', transLanguage);
        },
    },
    mutations: {
        SET_ORIGIN_LANGUAGE(state, payload) {
            state.originLanguage = payload;
        },
        SET_TRANS_LANGUAGE(state, payload) {
            state.transLanguage = payload;
        },
    }
  }