import { useQuery } from '@tanstack/react-query';
import ApiClient from '../react-query/services/apiClient';
import { CACHE_KET_TODOS } from '../react-query/constants';

const apiClient = new ApiClient<Todo>('/todos');

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
    return useQuery<Todo[], Error>({
      queryKey: CACHE_KET_TODOS,
      queryFn: apiClient.getAll,
      staleTime: 10 * 1000
    });
}

export default useTodos