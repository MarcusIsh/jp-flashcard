<template>
  <div class="word-card">
    <div class="row justify-content-center">
      <div class="col-3 align-self-center">
        <div class="card question-card">
          <div class="card-header">Word</div>
          <div class="card-body">
            <div class="row">
              <!-- {{ currentWord }} -->
              <div class="col-12">
                <div class="row">
                  <div class="col-12">
                    {{
                      $store.getters["word/getUnit"] != "Shopping" &&
                      $store.getters["language/transLang"] == "JP"
                        ? $store.getters["word/getJapanese"]
                        : $store.getters["word/getEnglish"]
                    }}
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-12"
                    v-if="$store.getters['language/transLang'] == 'JP'"
                  >
                    {{ $store.getters["word/getRomaji"] }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button
                      class="btn btn-lg"
                      @click="tts($store.getters['language/transLang'])"
                    >
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
    // word: String,
    json: Array,
    // currentWord: Object,
  },
  data() {
    return {
      word: {},
    };
  },
  methods: {
    //text to speech
    tts(language) {
      var msg = new SpeechSynthesisUtterance();
      console.log(language);
      if (language == "JP") {
        msg.text = this.$store.getters["word/getJapanese"];
        msg.lang = "ja-JP";
      } else {
        msg.text = this.$store.getters["word/getEnglish"];
        msg.lang = "en-EN";
      }

      window.speechSynthesis.speak(msg);
    },
  },
  mounted() {
    this.word = this.$store.getters["word/currentWord"];
  },
  created() {
    const vm = this;
  },
};
</script>