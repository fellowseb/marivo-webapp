import styles from './playspage.module.css';
import MainLayout from './MainLayout';

function PlayFilters() {
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

interface PlayListItemModel {
  id: string;
  title: string;
  creationDate: number;
  lastModificationDate: number;
  owner: string;
}

interface PlayListItemProps {
  model: PlayListItemModel;
}

function PlayListItem(props: PlayListItemProps) {
  return (
    <li className={styles.play}>
      <div className={styles.playPoster}></div>
      <div className={styles.playDetails}>
        <span className={styles.playTitle}>{props.model.title}</span>
        <span>
          Owned by{' '}
          <span className={styles.playDetailsValues}>{props.model.owner}</span>
        </span>

        <span>
          Créée le{' '}
          <span className={styles.playDetailsValues}>
            {new Date(props.model.creationDate).toLocaleString()}
          </span>
        </span>
        <span>
          Dernière modification le{' '}
          <span className={styles.playDetailsValues}>
            {new Date(props.model.lastModificationDate).toLocaleString()}
          </span>
        </span>
      </div>
    </li>
  );
}

function PlayList() {
  const plays: PlayListItemModel[] = [
    {
      id: '6c793b2b-d403-457a-ac03-b86a57e9cef0',
      title: 'La noce',
      creationDate: 1757974316008,
      lastModificationDate: 1757974316008,
      owner: 'Sébastien Wauquier',
    },
    {
      id: '6130a42e-2f78-48ba-98ef-3901e120f2d3',
      title: 'Huit femmes',
      creationDate: 1757974316008,
      lastModificationDate: 1757974316008,
      owner: 'Sébastien Wauquier',
    },
    {
      id: 'b453215e-fd39-446d-a57b-415876fa7a1f',
      title: 'The Mousetrap',
      creationDate: 1757974316008,
      lastModificationDate: 1757974316008,
      owner: 'Sébastien Wauquier',
    },
  ];
  return (
    <ul className={styles.plays}>
      {plays.map((model) => (
        <PlayListItem key={model.id} model={model} />
      ))}
    </ul>
  );
}

function PlayListActions() {
  return (
    <div className={styles.playListActions}>
      <button>➕ Create new play</button>
    </div>
  );
}

function PlaysPage() {
  return (
    <MainLayout pageTitle="My Plays" userNickname="Sébastien">
      <PlayFilters />
      <PlayList />
      <PlayListActions />
    </MainLayout>
  );
}

export default PlaysPage;
