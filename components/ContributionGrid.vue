<template>
    <div class="graph">
        <ul class="months non-style">
            <li>Jan</li>
            <li>Feb</li>
            <li>Mar</li>
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
            <li>Jul</li>
            <li>Aug</li>
            <li>Sep</li>
            <li>Oct</li>
            <li>Nov</li>
            <li>Dec</li>
        </ul>
        <ul class="days non-style">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
        </ul>
        <ul class="squares non-style">
            <!-- added via javascript -->
            <li :class="getColorClass(Math.floor(Math.random() * 31))" v-for="i in 365"></li>
        </ul>
    </div>
</template>
<script setup>

// Dummy data for contributions
const contributions = ref({
    // The data structure could be a nested array, an object, or whatever fits your data format
    // This is just an example of what such a structure might look like
    '2024-01-01': 4, // Example date and contribution count
    // ... more data
});

// 7 days a week
const days = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

// 53 weeks in the year
const weeks = ref(Array.from({ length: 53 }, (_, i) => i + 1));

// A method to get contribution value based on day and week, this should be adapted to your actual data structure
const getContributionValue = (day, week) => {
    // Access your actual contributions data here
    // and return the contribution value for the given day and week
    // For example:
    return contributions.value[`2024-${week}-${day}`] || 0;
};

// A method to determine the color class based on the contribution value
const getColorClass = (value) => {
    if (value > 15) {
        return 'bg-green-800';
    } else if (value > 10) {
        return 'bg-green-600';
    } else if (value > 5) {
        return 'bg-green-400';
    } else if (value > 0) {
        return 'bg-green-200';
    } else {
        return 'bg-green-100';
    }
};

</script>
<style>
    /* Article - https://bitsofco.de/github-contribution-graph-css-grid/ */

    /* Grid-related CSS */

    :root {
      --square-size: 10px;
      --square-gap: 3px;
      --week-width: calc(var(--square-size) + var(--square-gap));
    }

    .months {
      grid-area: months;
    }
    .days {
      grid-area: days;
    }
    .squares {
      grid-area: squares;
    }

    .graph {
      display: inline-grid;
      grid-template-areas:
        "empty months"
        "days squares";
      grid-template-columns: auto 1fr;
      grid-gap: 10px;
      padding: 20px !important;
    }

    .months {
      display: grid;
      grid-template-columns:
        calc(var(--week-width) * 4) /* Jan */
        calc(var(--week-width) * 4) /* Feb */
        calc(var(--week-width) * 4) /* Mar */
        calc(var(--week-width) * 5) /* Apr */
        calc(var(--week-width) * 4) /* May */
        calc(var(--week-width) * 4) /* Jun */
        calc(var(--week-width) * 5) /* Jul */
        calc(var(--week-width) * 4) /* Aug */
        calc(var(--week-width) * 4) /* Sep */
        calc(var(--week-width) * 5) /* Oct */
        calc(var(--week-width) * 4) /* Nov */
        calc(var(--week-width) * 5) /* Dec */;
    }

    .days,
    .squares {
      display: grid;
      grid-gap: var(--square-gap);
      grid-template-rows: repeat(7, var(--square-size));
    }

    .squares {
      grid-auto-flow: column;
      grid-auto-columns: var(--square-size);
    }

    .graph {
      padding: 0px;
      border: 1px #e1e4e8 solid;
      margin: 0px;
    }

    .days li:nth-child(odd) {
      visibility: hidden;
    }
    
    .non-style{
        list-style-type: none;
    }
  </style>