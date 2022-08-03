<template>
  <div>
    <div class="row">
      <div class="col-4" v-for="value in selected" :key="value.English">
        <div
          class="card gap answer"
          @click="selectAnswer($event, value.English)"
        >
          <div class="card-body">
            {{
              $store.getters["language/transLang"] == "JP"
                ? value.English
                : value.Japanese || value.JP.Japanese
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answers",
  props: {
    currentWord: Object,
    json: Array,
  },
  data() {
    return {
      shuffledArray: null,
      selected: [],
      answered: false,
      wrongCount: 0,
    };
  },
  methods: {
    selectAnswer(e, word) {
      if (this.answered) {
        return;
      }

      const el = e.target;

      if (word === this.$store.getters["word/getEnglish"]) {
        this.answered = true;
        el.parentElement.classList.add("correct");

        var msg = new SpeechSynthesisUtterance();
        if (window.localStorage.getItem("transLang") == "JP") {
          msg.text = this.$store.getters["word/getJapanese"];
          msg.lang = "ja-JP";
        } else {
          msg.text = this.$store.getters["word/getEnglish"];
          msg.lang = "en-EN";
        }
        window.speechSynthesis.speak(msg);

        this.$emit("rerenderComponent");
      } else {
        el.parentElement.classList.add("incorrect");

        this.wrongCount += 1;

        if (this.wrongCount == 3) {
          this.wrongCount = 0;
          this.$emit("renderComponent");
        }
      }
    },
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    },
    createWrongAnswer() {},
    createAnswers() {
      let vm = this;

      let currentWord = [];
      currentWord.English = this.$store.getters["word/getEnglish"];
      currentWord.Japanese = this.$store.getters["word/getJapanese"];
      currentWord.Romaji = this.$store.getters["word/getRomaji"];
      currentWord.Unit = this.$store.getters["word/getUnit"];

      console.log(currentWord);

      if (this.currentWord.Unit != "") {
        const unitType = this.json.filter(
          (word) => word.Unit == this.$store.getters["word/getUnit"]
        );

        let shuffledArray = this.shuffle(unitType);

        this.selected = shuffledArray.slice(0, 5);

        if (
          !this.selected.some(
            (e) => e.Romaji === this.$store.getters["word/getRomaji"]
          )
        ) {
          this.selected.push(currentWord);
        } else {
          this.selected = shuffledArray.slice(0, 6);
        }
      } else {
        this.shuffledArray = this.shuffle(this.json);
        this.selected = this.shuffledArray.slice(0, 5);

        console.log(currentWord);

        this.selected.push(currentWord);
      }

      this.selected = this.shuffle(this.selected);
      //   if (this.selected.find(this.currentWord.English)) {
      //   } else {
      //     this.createAnswers();
      //   }
    },
  },
  created() {
    setTimeout(() => {
      this.createAnswers();
    }, 1000);

    // this.shuffledArray;
  },
};
</script>