import { createContext, useEffect, useRef, useState } from "react";
import {
  INITIAL_GENERATION_SWAP_SPEED,
  INITIAL_SIZE,
} from "../../common/constants";
import { IGeneration } from "../../common/types/generation";
import { getNextGeneration } from "../../common/utils/get-next-generation";
import { Controls } from "../Controls/Controls";

import { Gameboard } from "../Gameboard";

import "./styles.scss";

const initialAliveCells: boolean[][] = Array(INITIAL_SIZE).fill(
  Array(INITIAL_SIZE).fill(false)
);

interface IAliveCellsContext {
  aliveCells: boolean[][];
  setAliveCells: (newCells: IGeneration) => void;
}

export const AliveCellsContext = createContext<IAliveCellsContext>({
  aliveCells: initialAliveCells,
  setAliveCells: (newCells: IGeneration) => {},
});

export function App() {
  const [size, setSize] = useState<number>(INITIAL_SIZE);
  const [isRun, setIsRun] = useState<boolean>(false);
  const [aliveCells, setAliveCells] = useState<IGeneration>(initialAliveCells);
  const [generationCounter, setGenerationCounter] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isRun) {
      timeoutRef.current = setTimeout(() => {
        const newGeneration = getNextGeneration(aliveCells);
        setAliveCells(newGeneration);
        setGenerationCounter(generationCounter + 1);
      }, INITIAL_GENERATION_SWAP_SPEED);
    } else if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  }, [generationCounter, isRun]);

  const value = { aliveCells, setAliveCells };

  return (
    <div className="App">
      <AliveCellsContext.Provider value={value}>
        <Gameboard aliveCells={aliveCells} size={size} />
        <Controls isRun={isRun} setIsRun={setIsRun} />
      </AliveCellsContext.Provider>
    </div>
  );
}
