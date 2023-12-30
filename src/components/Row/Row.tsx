import { FC } from "react";

import { SingleCell } from "../SingleCell";

import "./styles.scss";

type Props = {
  /** Индекс строки */
  rowIndex: number;
  /** Количество ячеек на игровой доске */
  size: number;
};

export const Row: FC<Props> = ({ rowIndex, size }) => {
  return (
    <div className="row">
      {Array(size)
        .fill(0)
        .map((item, index) => (
          <SingleCell
            cellIndices={{ row: rowIndex, column: index }}
            key={index}
            size={size}
          />
        ))}
    </div>
  );
};
