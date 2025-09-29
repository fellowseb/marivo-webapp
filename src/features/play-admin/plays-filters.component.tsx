import styles from './plays-filters.module.css';

function PlaysFilters() {
  return (
    <div className={styles.playFilters}>
      <label htmlFor="filter-title">
        Title:
        <input type="text" id="filter-title" placeholder="Filter by title..." />
      </label>
      <label htmlFor="sort-by">
        Sort by:
        <select>
          <option>Order by...</option>
        </select>
      </label>
      <label>
        <input type="checkbox" />
        Only plays I created
      </label>
    </div>
  );
}

export default PlaysFilters;
