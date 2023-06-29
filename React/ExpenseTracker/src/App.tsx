import Form from './components/Form';
import EventList from './components/eventList';
import EventFilter from './components/eventFilter';
import categories from './categories';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Eggs', amount: 2, category: 'Groceries' },
    { id: 2, description: 'Bacon', amount: 12, category: 'Groceries' },
    { id: 3, description: 'Sausage', amount: 15, category: 'Groceries' },
    { id: 4, description: 'Pancakes', amount: 6, category: 'Groceries' },
    { id: 5, description: 'Toothbrush', amount: 4, category: 'Utilities' },
    { id: 6, description: 'Phone', amount: 200, category: 'Entertainment' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <Form
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <EventFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <EventList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
