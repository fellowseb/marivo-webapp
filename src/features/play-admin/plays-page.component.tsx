import styles from './plays-page.module.css';
import PlaysFilters from './plays-filters.component';
import PlayList from './plays-list.component';

export function PlaysPageTitle() {
  return 'My Plays';
}

function PlaysPage() {
  return (
    <>
      <PlaysFilters />
      <PlayList />
      <div className={styles.playListActions}>
        <button>➕ Create new play</button>
      </div>
    </>
  );
}

export default PlaysPage;
