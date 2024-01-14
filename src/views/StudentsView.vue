<script lang="ts">
import StudentsList from '../components/StudentsList.vue';

export default {
  components: {
    StudentsList,
  },
};
</script>

<template>
  <div class="students">
    <h1>Студенты</h1>
    <StudentsList />
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .students {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
