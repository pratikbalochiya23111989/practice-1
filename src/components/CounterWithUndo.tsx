import React, { useReducer } from "react";

const initialState = {
  count: 0,
  history: []
};

function reducer(state: { count: number; history: string | any[]; }, action: { type: any; }) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        history: [...state.history, state.count]
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
        history: [...state.history, state.count]
      };

    case "UNDO":
      if (state.history.length === 0) return state;

      const previous = state.history[state.history.length - 1];

      return {
        count: previous,
        history: state.history.slice(0, -1)
      };

    default:
      return state;
  }
}

export default function CounterWithUndo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-3xl font-bold">Count: {state.count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>

        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={state.history.length === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
        >
          Undo
        </button>
      </div>

      <p className="text-sm text-gray-500">
        History length: {state.history.length}
      </p>
    </div>
  );
}
