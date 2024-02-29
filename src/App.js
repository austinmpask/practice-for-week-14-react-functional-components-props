import Showcase from "./Showcase";
import "./App.css";
import BaseStats from "./BaseStats";

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };

  function handleClick() {
    alert(baseStats.spAttack);
  }

  return (
    <div className="main-wrapper background">
      <Showcase />
      <BaseStats stats={baseStats} clicker={handleClick} />
    </div>
  );
}

export default App;
