import { FC } from "react";

import { Row } from "../Row";

import "./styles.scss";

type Props = {
  /** Двумерный массив состояний клеток */
  aliveCells: boolean[][];
  /** Количество ячеек на игровой доске */
  size: number;
};

export const Gameboard: FC<Props> = ({ aliveCells, size }) => {
  return (
    <div className="gameboard">
      {Array(size)
        .fill(0)
        .map((item, index) => (
          <Row aliveCellsInRow={aliveCells[index]} key={index} size={size} />
        ))}
    </div>
  );
};
