export default {
    namespaced: true,
    state: {
        score: 0,
    },
    getters: {
        score (state) {
            return `${state.score}`
        },
    },
    actions: {
        lowerScore (context) {
            let score = context.state.score;
            score--;
            context.commit('LOWER_SCORE', score);
        },
        raiseScore (context) {
            let score = context.state.score;
            score++;
            context.commit('RAISE_SCORE', score)
        },
    },
    mutations: {
        LOWER_SCORE(state, payload) {
            state.score = payload;
        },
        RAISE_SCORE(state, payload) {
            state.score = payload;
        },
    }
  }