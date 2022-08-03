export default {
    namespaced: true,
    state: {
        english: '',
        unit: '',
        japanese: '',
        romaji: '',
    },
    getters: {
        getEnglish (state) {
            return `${state.english}`
        },
        getUnit (state) {
            return `${state.unit}`
        },
        getJapanese (state) {
            return `${state.japanese}`
        },
        getRomaji (state) {
            return `${state.romaji}`
        },
        getWord (state) {
            let data = {
                english: `${state.english}`,
                japanese: `${state.japanses}`,
                romaji: `${state.romaji}`,
                unit: `${state.unit}`,
            }
            return data;
        }
    },
    actions: {
        setNewWord (context, payload) {
            context.commit('SET_WORD', payload);
        }
    },
    mutations: {
        SET_WORD(state, payload){
            state.english = payload.English;
            state.unit = payload.Unit;
            state.japanese = payload.JP.Japanese;
            state.romaji = payload.JP.Romaji;
        }
    }
  }