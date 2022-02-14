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
  </div>
</template>

<script>
import Help from "@/Help";
import problemData from "@/data/TFAE.json";

export default {
  name: "TFAE",
  mixins: [Help],
  data: function () {
    const startingProblemSet = Help.randomElement(problemData);
    const startingProblem = Help.randomElement(startingProblemSet.problems);
    const startingQuestion = Help.randomElement(startingProblem.equivalencies);
    return {
      problems: problemData,
      currentProblemSet: startingProblemSet,
      currentProblem: startingProblem,
      currentQuestion: startingQuestion,
    };
  },
  mounted: function () {
    console.log(this.currentProblem);
  },
  methods: {
    randomProblemSet: function () {
      return Help.randomElement(this.problemData);
    },
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
</style>
