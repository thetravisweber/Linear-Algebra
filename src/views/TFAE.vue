<template>
  <div class="TFAE">
    <h1>The Following Statments Are Equivalent</h1>
    <h3 id="context">{{ currentProblemSet.context }}</h3>
    <div id="options">
      <h4
        v-for="problem in currentProblemSet.problems"
        :key="problem.statement"
        class="option"
      >
        {{ problem.statement }}
      </h4>
    </div>
    <div id="question">
      <h3 id="equivalency">{{ currentQuestion }}</h3>
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
