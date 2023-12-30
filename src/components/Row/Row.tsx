import { FC } from "react";

import { SingleBlock } from "../SingleBlock";

import "./styles.scss";

type Props = {
  /** Живые клетки в этом ряду */
  aliveCellsInRow: boolean[];
  /** Количество ячеек на игровой доске */
  size: number;
};

export const Row: FC<Props> = ({ aliveCellsInRow, size }) => {
  return (
    <div className="row">
      {Array(size)
        .fill(0)
        .map((item, index) => (
          <SingleBlock
            isAlive={aliveCellsInRow[index]}
            key={index}
            size={size}
          />
        ))}
    </div>
  );
};
