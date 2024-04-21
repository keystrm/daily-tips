<template>
    <div class="bg-gray-800 p-5">
      <!-- Contribution Grid Table -->
      <div class="overflow-x-auto">
        <table class="table-fixed border-separate" style="border-spacing: 0.25rem;">
          <tbody>
            <!-- Loop over each day -->
            <tr v-for="day in days" :key="day">
              <!-- Loop over each week -->
              <td
                v-for="week in weeks"
                :key="week"
                :class="getColorClass(getContributionValue(day, week))"
                class="w-3 h-3 rounded"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
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

