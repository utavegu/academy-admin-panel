import { $api } from '../index';
import type { IStudent } from '@/typespaces/interfaces/IStudent';
import type { IStudentsQueryParams } from '@/typespaces/interfaces/IStudentsQueryParams';

export default class StudentsService {
  static async fetchStudents(queryParams: IStudentsQueryParams): Promise<IStudent[]> {
    const response = await $api.request({
      method: 'GET',
      url: '/students',
      params: queryParams,
    });

    return response.data.data;
  }
}
