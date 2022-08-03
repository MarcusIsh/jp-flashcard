<template>
  <NavHeader @clearWord="clearWord" @rerender="forceRerender" />

  <div class="container-fluid">
    <DisplayArea
      v-if="rerenderComponent"
      class="gap"
      :word="word"
      :current-word="currentWord"
      :json="json"
    />
    SCORE: {{ $store.getters["score/score"] }}
    <div class="answer-area">
      <Answers
        v-if="rerenderComponent"
        @word="changeWord"
        @rerender-component="forceRerender"
        :current-word="currentWord"
        :json="json"
      />
    </div>
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>


<script>
import NavHeader from "./components/navHeader.vue";
import DisplayArea from "./components/display-area.vue";
import Answers from "./components/answers.vue";
import Json from "./assets/json/newJPWordList.json";

export default {
  name: "App",
  components: {
    NavHeader,
    DisplayArea,
    Answers,
  },
  data() {
    return {
      word: null,
      currentWord: [],
      selectedAnswer: null,
      rerenderComponent: true,
      score: 0,
      json: Json,
    };
  },
  methods: {
    changeWord(word) {
      this.word = word;
    },
    clearWord() {
      this.currentWord = "";
      this.pickNewWord();
    },
    setCurrentWord(e) {
      this.currentWord = e;
    },
    forceRerender() {
      this.pickNewWord();
      this.rerenderComponent = false;

      this.$store.dispatch("score/raiseScore");

      this.$nextTick(() => {
        this.rerenderComponent = true;
      });
    },
    pickNewWord() {
      const random = Math.floor(Math.random() * this.json.length);
      // console.log(random);
      let selectedWord = this.json[random];
      // this.currentWord = selectedWord;
      this.$store.dispatch("word/setNewWord", selectedWord);
      //   console.log(selectedWord);
    },
  },
  mounted() {
    this.pickNewWord();

    //set language in vuex
    this.$store.dispatch(
      "language/setOriginLanguage",
      window.localStorage.getItem("originLanguage")
    );
    this.$store.dispatch(
      "language/setTransLanguage",
      window.localStorage.getItem("transLanguage")
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
