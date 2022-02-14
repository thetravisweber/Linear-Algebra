<template>
  <div class="TFAE">
    <h1>The Following Statments Are Equivalent</h1>
    <h3 id="context">{{ currentProblem.context }}</h3>
    <div id="options">
      <h4 v-for="statement in statements" :key="statement" class="option">
        {{ statement }}
      </h4>
    </div>
    <div id="question">
      <h3 id="equivalency">Proposed Statement will go here</h3>
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
      currentProblem: Help.randomElement(problemData),
    };
  },
  mounted: function() {
    console.log(this.currentProblem);
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
