export function SortTodos({ currentSort, setSort }) {
  return (
    <div>
      <button
        onClick={() => setSort("alpha")}
        className={currentSort === "alpha" ? "current" : ""}
      >
        alphabetically
      </button>
      <button
        onClick={() => setSort("date")}
        className={currentSort === "date" ? "current" : ""}
      >
        by date created
      </button>
      <button
        onClick={() => setSort("completion")}
        className={currentSort === "completion" ? "current" : ""}
      >
        by completion status
      </button>
    </div>
  );
}
