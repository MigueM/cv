import styles from "./timeLine.module.css";

const HistoryItem = ({ history }) => {
  return (
    <div className={styles.historyItem}>
      <div className={styles.historyDate}>
        <p>{history.date}</p>
      </div>
      <div className={styles.historyInfo}>
        <span className={styles.historyTitle}>
          <b>{history.title}</b>
        </span>
        <br />
        <span className={styles.historySubtitle}>{history.subtitle}</span>
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
