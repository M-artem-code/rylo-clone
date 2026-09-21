"use client";

import { diameters, type DiameterId } from "@/data/site";

export function SizeStave({
  active = "15",
  showAll = false,
  allActive = false,
  onSelect,
  onSelectAll,
}: {
  active?: DiameterId | "";
  showAll?: boolean;
  allActive?: boolean;
  onSelect?: (diameter: DiameterId) => void;
  onSelectAll?: () => void;
}) {
  return (
    <div className="stave">
      {showAll ? (
        onSelectAll ? (
          <button
            type="button"
            className={`stave-all${allActive ? " is-active" : ""}`}
            onClick={onSelectAll}
          >
            All
          </button>
        ) : (
          <div className="stave-all">All</div>
        )
      ) : null}
      <div className="stave-rail">
        <div className="stave-minors" />
      </div>
      <div className={`stave-ticks${showAll ? " all-mode" : ""}`}>
        {diameters.map((diameter) => {
          const isActive = diameter === active;
          const inner = (
            <>
              <div className="mark" />
              <div className="label">{diameter}&quot;</div>
            </>
          );
          if (onSelect) {
            return (
              <button
                type="button"
                key={diameter}
                className={`tick${isActive ? " active" : ""}`}
                onClick={() => onSelect(diameter)}
                aria-pressed={isActive}
              >
                {inner}
              </button>
            );
          }
          return (
            <div key={diameter} className={`tick${isActive ? " active" : ""}`}>
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
