<template>
  <!-- <Header @clearWord="clearWord" /> -->

  <div class="container-fluid">
    <DisplayArea
      v-if="rerenderComponent"
      :word="word"
      :current-word="currentWord"
      :json="json"
    />
    SCORE: {{ score }}
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
// import Header from "./components/header.vue";
import DisplayArea from "./components/display-area.vue";
import Answers from "./components/answers.vue";
import jpJson from "./assets/json/jpwordlist.json";

export default {
  name: "App",
  components: {
    // Header,
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
      json: jpJson,
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
      setTimeout(() => {
        this.rerenderComponent = false;

        this.score++;

        this.$nextTick(() => {
          this.rerenderComponent = true;
        });
      }, 1000);
    },
    pickNewWord() {
      const random = Math.floor(Math.random() * this.json.length);
      console.log(random);
      let selectedWord = this.json[random];
      this.currentWord = selectedWord;
      //   console.log(selectedWord);
    },
  },
  mounted() {
    this.pickNewWord();
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
