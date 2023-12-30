import { FC } from "react";
import { GAMEBOARD_WIDTH_HEIGHT } from "../../common/constants";

import "./styles.scss";

type Props = {
  /** Жива ли клетка */
  isAlive: boolean;
  /** Количество ячеек на игровой доске */
  size: number;
};

export const SingleBlock: FC<Props> = ({ isAlive, size }) => {
  const blockSize = GAMEBOARD_WIDTH_HEIGHT / size - 1;
  const style = { width: blockSize, height: blockSize };

  const className = `single-block${isAlive ? " single-block_alive" : ""}`;

  return <div className={className} style={style}></div>;
};
