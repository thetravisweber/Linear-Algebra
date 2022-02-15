<template>
  <div class="TFAE">
    <h1>The Following Statments Are Equivalent</h1>
    <h4 id="context">
      <i>{{ currentProblemSet.context }}</i>
    </h4>
    <div id="options">
      <h4 class="problem-head">Is Equivalent to:</h4>
      <div
        v-for="problem in currentProblemSet.problems"
        :key="problem.statement"
        class="option"
        @click="clickedOn(problem.statement)"
      >
        <h4>
          {{ problem.statement }}
        </h4>
      </div>
    </div>
    <div id="question">
      <h4 class="problem-head">Statement:</h4>
      <h2 id="equivalency">{{ currentQuestion }}</h2>
    </div>
    <div class="correctness">
      <h3 id="correct" :class="correctness">{{ correctness }}</h3>
    </div>
  </div>
</template>

<script>
import Help from "@/Help";
import problemData from "@/data/TFAE.json";

export default {
  name: "TFAE",
  mixins: [Help],
  data: function () {
    return {
      problems: problemData,
      currentProblemSet: [],
      currentProblem: [],
      currentQuestion: "",
      correctness: "",
    };
  },
  methods: {
    clickedOn: function (statement) {
      // eslint-disable-next-line prettier/prettier
      let correct = (this.currentProblem.statement == statement);

      if (correct) {
        this.showCorrect();
      } else {
        this.showIncorrect();
      }
      this.assignNewProblem();
    },
    assignNewProblem: function () {
      this.currentProblemSet = Help.randomElement(this.problems);
      this.currentProblem = Help.randomElement(this.currentProblemSet.problems);
      this.currentQuestion = Help.randomElement(
        this.currentProblem.equivalencies
      );
    },
    showCorrect: function () {
      this.correctness = "Correct 👍";
    },
    showIncorrect: function () {
      this.correctness = "Incorrect";
    },
  },
  mounted: function () {
    this.assignNewProblem();
  },
};
</script>

<style scoped>
#options {
  position: fixed;
  width: 50%;
  left: 50%;
  margin-top: 0;
}

.option {
  width: 80%;
  margin: auto;
  padding-bottom: 10px;
}

.option h4 {
  padding: 10px;
  margin: auto;
  width: 80%;
  border-left: 8px solid rgba(16, 200, 205);
  background-color: rgba(16, 200, 205, 0.2);
}

.problem-head {
  margin-top: 20px;
}

#question {
  position: fixed;
  margin-left: 10%;
  width: 40%;
  margin-top: auto;
}

#context {
  text-decoration: underline;
}

.correctness {
  margin-top: 250px;
}

.Correct {
  color: darkgreen;
}

.Incorrect {
  color: red;
}
</style>
