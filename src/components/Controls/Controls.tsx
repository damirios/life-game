import { FC } from "react";

type Props = {
  /** Запущена ли симуляция */
  isRun: boolean;
  /** Запустить/остановить симуляцию */
  setIsRun: (newState: boolean) => void;
};

export const Controls: FC<Props> = ({ isRun, setIsRun }) => {
  const handleRunClick = () => setIsRun(!isRun);

  return (
    <div className="controls">
      <button onClick={handleRunClick}>{isRun ? "Stop" : "Run"}</button>
    </div>
  );
};
