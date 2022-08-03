import {createStore} from 'vuex'
import scoreModule from './score.module'
import wordModule from './word.module'
import languageModule from './language.module'

const store = createStore({
    modules: {
        score: scoreModule,
        word: wordModule,
        language: languageModule
    }
})

export default store