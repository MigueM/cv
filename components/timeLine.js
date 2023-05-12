import { useState } from "react";
import styles from "./timeLine.module.css";

const HistoryItem = ({ history }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className={expand ? styles.historyItemExpanded : styles.historyItem}
      onClick={() => history.description && setExpand(!expand)}
    >
      <div className={styles.historyDate}>
        <p>{history.date}</p>
      </div>
      <div className={styles.historyInfo}>
        <span className={styles.historyTitle}>
          <b>{history.title}</b>
        </span>
        <br />
        <span className={styles.historySubtitle}>{history.subtitle}</span>

        {history.description && (
          <div className={styles.historyDescription}>
            <p>
              {history.description}
                  <br />
                  {history.tech && ( <b>Tech/Skills </b> ) }
                  <em> {history.tech} </em>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const TimeLine = ({ history }) => {
  return (
    <section className={styles.timeLineContainer}>
      {history.map((historyBit, i) => (
        <HistoryItem history={historyBit} key={i} />
      ))}
    </section>
  );
};

export default TimeLine;
