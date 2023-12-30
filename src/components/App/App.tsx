import { useState } from "react";
import { INITIAL_SIZE } from "../../common/constants";

import { Gameboard } from "../Gameboard";

import "./styles.scss";

export function App() {
  const [size, setSize] = useState<number>(INITIAL_SIZE);
  const [aliveCells, setAliveCells] = useState<boolean[][]>(
    Array(INITIAL_SIZE).fill(Array(INITIAL_SIZE).fill(true))
  );

  return (
    <div className="App">
      <Gameboard aliveCells={aliveCells} size={size} />
    </div>
  );
}
