<template>
  <div class="TFAE">
    <h1>The Following Statments Are Equivalent</h1>
    <h3 id="context">{{ currentProblem.context }}</h3>
    <div id="options">
      <p>options will go here lol</p>
    </div>
    <h2 id="context">{{ currentProblem.statement }}</h2>
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
      currentProblem: Help.randomElement(problemData),
    };
  },
  methods: {
    randomProblem: function () {
      return Help.randomElement(this.problemData);
    },
  },
  computed: {
    statements: function () {
      return this.problems.map((el) => {
        return el.statement;
      });
    },
  },
};
</script>
