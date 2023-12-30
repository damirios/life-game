import { IGeneration } from "../../types/generation";
import { checkCellNeighbours } from "../check-cell-neighbours";

export const getNextGeneration = (generation: IGeneration): IGeneration => {
  const newGeneration = [];
  for (let i = 0; i < generation.length; i++) {
    const newRow = [];

    for (let j = 0; j < generation[i].length; j++) {
      const cell = generation[i][j];
      const aliveNeighbours = checkCellNeighbours(generation, i, j);

      newRow.push(aliveNeighbours === 3 || (aliveNeighbours === 2 && cell));
    }

    newGeneration.push(newRow);
  }

  return newGeneration;
};
