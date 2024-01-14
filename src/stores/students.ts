import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import StudentsService from '@/api/services/StudentsService';
import type { IStudent } from '@/typespaces/interfaces/IStudent';
import type { IStudentsQueryParams } from '@/typespaces/interfaces/IStudentsQueryParams';

export const useStudentsStore = defineStore('students', () => {
  const students = ref<IStudent[]>([]);
  const loader = ref<boolean>(false);
  const errorMessage = ref<string>(''); // TODO: по хорошему, конечно, налл и объект ошибки, но с тайпскриптом в другой раз повоюю
  // const count = ref<number>(0)

  const femaleOnly = computed(() => students.value.filter((student) => student.personalData.isMale === false));

  // function increment() {
  //   count.value++
  // }

  const getStudents = async (search: IStudentsQueryParams) => {
    try {
      errorMessage.value = '';
      loader.value = true;
      students.value = await StudentsService.fetchStudents(search);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        errorMessage.value = err.message;
      }
    } finally {
      loader.value = false;
    }
  };

  return { getStudents, loader, errorMessage, students, femaleOnly };
});
