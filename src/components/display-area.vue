<template>
  <div class="word-card">
    <div class="row justify-content-center">
      <div class="col-3 align-self-center">
        <div class="card">
          <div class="card-header">Word</div>
          <div class="card-body">
            <div class="row">
              <!-- {{ currentWord }} -->
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    {{ currentWord.Japanese }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    {{ currentWord.Romaji }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-lg" @click="tts(currentWord.Romaji)">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="{2}"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tts from "./service/tts.vue";
export default {
  name: "DisplayArea",
  props: {
    word: String,
    json: Array,
    currentWord: Object,
  },
  data() {
    return {
      //   word: this.word,
      studyWords: [
        {
          id: 0,
          kanji: "",
          hirigana: "はい",
          answer: "Yes",
          pronunciation: "Hai",
        },
        {
          id: 1,
          kanji: "ほ",
          hirigana: "本ん",
          answer: "Book",
          pronunciation: "Hon",
        },
      ],
      //   currentWord: {},
    };
  },
  methods: {
    // pickNewWord() {
    //   const random = Math.floor(Math.random() * this.json.length);
    //   console.log(random);
    //   let selectedWord = this.json[random];
    //   this.currentWord = selectedWord;

    //   this.$emit("currentWord", this.currentWord);
    //   //   console.log(selectedWord);
    // },
    tts(text) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = "ja-JP";
      window.speechSynthesis.speak(msg);
    },
  },
  mounted() {},
  created() {
    const vm = this;
    // setTimeout(function () {
    // vm.pickNewWord();

    // console.log(`Voices #: ${speechSynthesis.getVoices().length}`);
    // speechSynthesis.getVoices().forEach((voice) => {
    //   console.log(voice.name, voice.lang);
    // });
    // }, 1000);
  },
};
</script>