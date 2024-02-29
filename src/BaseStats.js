import "./BaseStats.css";

function BaseStats({ stats, clicker }) {
  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <button className="sp-stats" onClick={clicker}>
        Check something
      </button>
      <span>hp:{stats.hp}</span>
    </div>
  );
}

export default BaseStats;
