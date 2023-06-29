import categories from '../categories';

interface Props {
  onSelectCategory: (category: string) => void;
}

const EventFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select mb-3"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventFilter;
