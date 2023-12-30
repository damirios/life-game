import { IGeneration } from "../../types/generation";

export const checkCellNeighbours = (
  generation: IGeneration,
  row: number,
  column: number
): number => {
  let aliveNeighbours = 0;
  const lastRowIndex = generation.length - 1;
  const lastColumnIndex = generation[0].length - 1;

  if (row === 0 && column === 0) {
    aliveNeighbours =
      +generation[row + 1][column + 1] +
      +generation[row + 1][column] +
      +generation[row + 1][lastColumnIndex] +
      +generation[row][column + 1] +
      +generation[row][lastColumnIndex] +
      +generation[lastRowIndex][column + 1] +
      +generation[lastRowIndex][column] +
      +generation[lastRowIndex][lastColumnIndex];
  } else if (row === 0 && column === lastColumnIndex) {
    aliveNeighbours =
      +generation[row + 1][0] +
      +generation[row + 1][column] +
      +generation[row + 1][column - 1] +
      +generation[row][0] +
      +generation[row][column - 1] +
      +generation[lastRowIndex][0] +
      +generation[lastRowIndex][column] +
      +generation[lastRowIndex][column - 1];
  } else if (row === lastRowIndex && column === 0) {
    aliveNeighbours =
      +generation[0][column + 1] +
      +generation[0][column] +
      +generation[0][lastColumnIndex] +
      +generation[row][column + 1] +
      +generation[row][lastColumnIndex] +
      +generation[row - 1][column + 1] +
      +generation[row - 1][column] +
      +generation[row - 1][lastColumnIndex];
  } else if (row === lastRowIndex && column === lastColumnIndex) {
    aliveNeighbours =
      +generation[0][0] +
      +generation[0][column] +
      +generation[0][column - 1] +
      +generation[row][0] +
      +generation[row][column - 1] +
      +generation[row - 1][0] +
      +generation[row - 1][column] +
      +generation[row - 1][column - 1];
  } else if (row === 0) {
    aliveNeighbours =
      +generation[row + 1][column + 1] +
      +generation[row + 1][column] +
      +generation[row + 1][column - 1] +
      +generation[row][column + 1] +
      +generation[row][column - 1] +
      +generation[lastRowIndex][column + 1] +
      +generation[lastRowIndex][column] +
      +generation[lastRowIndex][column - 1];
  } else if (row === lastRowIndex) {
    aliveNeighbours =
      +generation[0][column + 1] +
      +generation[0][column] +
      +generation[0][column] +
      +generation[row][column + 1] +
      +generation[row][column - 1] +
      +generation[row - 1][column + 1] +
      +generation[row - 1][column] +
      +generation[row - 1][column - 1];
  } else if (column === 0) {
    aliveNeighbours =
      +generation[row + 1][column + 1] +
      +generation[row + 1][column] +
      +generation[row + 1][lastColumnIndex] +
      +generation[row][column + 1] +
      +generation[row][lastColumnIndex] +
      +generation[row - 1][column + 1] +
      +generation[row - 1][column] +
      +generation[row - 1][lastColumnIndex];
  } else if (column === lastColumnIndex) {
    aliveNeighbours =
      +generation[row + 1][0] +
      +generation[row + 1][column] +
      +generation[row + 1][column - 1] +
      +generation[row][0] +
      +generation[row][column - 1] +
      +generation[row - 1][0] +
      +generation[row - 1][column] +
      +generation[row - 1][column - 1];
  } else {
    aliveNeighbours =
      +generation[row + 1][column + 1] +
      +generation[row + 1][column] +
      +generation[row + 1][column - 1] +
      +generation[row][column + 1] +
      +generation[row][column - 1] +
      +generation[row - 1][column + 1] +
      +generation[row - 1][column] +
      +generation[row - 1][column - 1];
  }

  return aliveNeighbours;
};
