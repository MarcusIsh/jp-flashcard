<template>
  <div>
    <div class="row">
      <div class="col-4" v-for="value in selected" :key="value.English">
        <div
          class="card gap answer"
          @click="selectAnswer($event, value.English)"
        >
          <div class="card-body">{{ value.English }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answers",
  props: {
    currentWord: Array,
    json: Array,
  },
  data() {
    return {
      answers: [
        {
          answer: "Book",
        },
        {
          answer: "Yes",
        },
        {
          answer: "test3",
        },
        {
          answer: "test4",
        },
        {
          answer: "test5",
        },
        {
          answer: "test6",
        },
      ],
      shuffledArray: null,
      selected: [],
      answered: false,
    };
  },
  methods: {
    selectAnswer(e, word) {
      if (this.answered) {
        return;
      }
      let test = word;
      const el = e.target;

      if (word === this.currentWord.English) {
        this.answered = true;
        el.parentElement.classList.add("correct");

        var msg = new SpeechSynthesisUtterance();
        msg.text = this.currentWord.Romaji;
        msg.lang = "ja-JP";
        window.speechSynthesis.speak(msg);

        this.$emit("rerenderComponent");
      } else {
        el.parentElement.classList.add("incorrect");
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

      if (this.currentWord.Unit != "") {
        const unitType = this.json.filter(
          (word) => word.Unit == this.currentWord.Unit
        );

        let shuffledArray = this.shuffle(unitType);

        this.selected = shuffledArray.slice(0, 5);

        if (!this.selected.some((e) => e.Romaji === this.currentWord.Romaji)) {
          this.selected.push(vm.currentWord);
        } else {
          this.selected = shuffledArray.slice(0, 6);
        }
      } else {
        this.shuffledArray = this.shuffle(this.json);
        this.selected = this.shuffledArray.slice(0, 5);
        this.selected.push(vm.currentWord);
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