import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_KET_TODOS } from '../react-query/constants';
import todoSevice, { Todo } from '../react-query/services/todoSevice';


interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoSevice.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KET_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KET_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },

    onSuccess: (saveTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KET_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? saveTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KET_TODOS, context.previousTodos);
    },
  });
}

export default useAddTodo