import { NavLink } from 'react-router';
import styles from './plays-list.module.css';
import { plays } from '../../mock-data';

interface PlayListItemProps {
  id: string;
  title: string;
  owner: string;
  creationDate: number;
  lastModificationDate: number;
}

function PlayListItem(props: PlayListItemProps) {
  return (
    <li className={styles.play}>
      <NavLink
        replace
        to={{
          pathname: '/play/' + props.id,
        }}
      >
        <div className={styles.playPoster}></div>
        <div className={styles.playDetails}>
          <span className={styles.playTitle}>{props.title}</span>
          <span>
            Owned by{' '}
            <span className={styles.playDetailsValues}>{props.owner}</span>
          </span>

          <span>
            Créée le{' '}
            <span className={styles.playDetailsValues}>
              {new Date(props.creationDate).toLocaleString()}
            </span>
          </span>
          <span>
            Dernière modification le{' '}
            <span className={styles.playDetailsValues}>
              {new Date(props.lastModificationDate).toLocaleString()}
            </span>
          </span>
        </div>
      </NavLink>
    </li>
  );
}

function PlayList() {
  return (
    <ul className={styles.plays}>
      {plays.map(({ id, title, owner, lastModificationDate, creationDate }) => (
        <PlayListItem
          key={id}
          id={id}
          owner={owner}
          title={title}
          lastModificationDate={lastModificationDate}
          creationDate={creationDate}
        />
      ))}
    </ul>
  );
}

export default PlayList;
