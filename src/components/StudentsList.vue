<script setup lang="ts">
import { onMounted } from 'vue';
import { useStudentsStore } from '@/stores/students';

const studentsStore = useStudentsStore();

onMounted(() => {
  studentsStore.getStudents({
    searchField: 'surname',
    searchString: 'оВ',
    sortBy: 'surnameAsc',
    limit: 10,
    page: 1,
  });
});
</script>

<template>
  <div v-if="studentsStore.loader">Идёт загрузка...</div>
  <div v-if="studentsStore.errorMessage">{{ studentsStore.errorMessage }}</div>
  <ul v-if="studentsStore.students.length">
    <li
      v-for="student of studentsStore.students"
      :key="student.id"
    >
      <div>
        {{ student.personalData.surname }} {{ student.personalData.name }}
        {{ student.personalData.patronymic }}
      </div>
      <div>{{ student.contact.country }}, {{ student.contact.city }}. {{ student.contact.phone }}</div>
      <div>Учится в группе: {{ student.group.groupName }}</div>
      <hr />
    </li>
  </ul>
  <!-- <div>{{ studentsStore.femaleOnly }}</div> -->
</template>
@/stores/students
