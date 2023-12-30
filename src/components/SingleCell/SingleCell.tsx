import { FC, useContext } from "react";

import { GAMEBOARD_WIDTH_HEIGHT } from "../../common/constants";
import { AliveCellsContext } from "../App";

import "./styles.scss";

type Props = {
  /** Строка и столбец ячейки */
  cellIndices: { column: number; row: number };
  /** Количество ячеек на игровой доске */
  size: number;
};

export const SingleCell: FC<Props> = ({
  size,
  cellIndices: { column, row },
}) => {
  const blockSize = GAMEBOARD_WIDTH_HEIGHT / size - 1;
  const style = { width: blockSize, height: blockSize };

  const { aliveCells, setAliveCells } = useContext(AliveCellsContext);

  const handleClick = () => {
    const newAliveCells = JSON.parse(JSON.stringify(aliveCells));
    newAliveCells[row][column] = !aliveCells[row][column];
    setAliveCells(newAliveCells);
  };

  const className = `single-block${
    aliveCells[row][column] ? " single-block_alive" : ""
  }`;

  return <div onClick={handleClick} className={className} style={style}></div>;
};
