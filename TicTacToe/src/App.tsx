import { useState } from "react";

type SquareProps = { input: string; onClick: () => void };
const Square = ({ input, onClick }: SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
      {input}
    </button>
  );
};

const Board = ({ handleTurn }: { handleTurn: ([]) => void }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const handleSquareClick = (num: number) => {
    const newBoard = board.slice();
    newBoard[num] = player;
    setBoard(newBoard);

    setPlayer(player === "X" ? "O" : "X");
    handleTurn(board);
  };

  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square input={board[0]} onClick={() => handleSquareClick(0)} />
          <Square input={board[1]} onClick={() => handleSquareClick(1)} />
          <Square input={board[2]} onClick={() => handleSquareClick(2)} />
        </div>
        <div className="board-row">
          <Square input={board[3]} onClick={() => handleSquareClick(3)} />
          <Square input={board[4]} onClick={() => handleSquareClick(4)} />
          <Square input={board[5]} onClick={() => handleSquareClick(5)} />
        </div>
        <div className="board-row">
          <Square input={board[6]} onClick={() => handleSquareClick(6)} />
          <Square input={board[7]} onClick={() => handleSquareClick(7)} />
          <Square input={board[8]} onClick={() => handleSquareClick(8)} />
        </div>
      </div>
    </>
  );
};

export default function App() { }
