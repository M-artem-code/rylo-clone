"use client";

import { useState } from "react";

export function FaqList({
  items,
}: {
  items: { question: string; answer: string; open?: boolean }[];
}) {
  const [open, setOpen] = useState(() => items.map((item) => Boolean(item.open)));

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = open[index];
        return (
          <div key={item.question} className={`faq-item${isOpen ? "" : " closed"}`}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() =>
                setOpen((current) => current.map((value, i) => (i === index ? !value : value)))
              }
            >
              {item.question}
              <span className="mark">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <div className="faq-a">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
