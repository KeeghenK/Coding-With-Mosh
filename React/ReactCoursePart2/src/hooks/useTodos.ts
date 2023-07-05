import { useQuery } from '@tanstack/react-query';
import { CACHE_KET_TODOS } from '../react-query/constants';
import todoSevice, { Todo } from '../react-query/services/todoSevice';


const useTodos = () => {
    return useQuery<Todo[], Error>({
      queryKey: CACHE_KET_TODOS,
      queryFn: todoSevice.getAll,
      staleTime: 10 * 1000
    });
}

export default useTodos