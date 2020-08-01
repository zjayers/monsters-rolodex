import * as React from "react";
import "./search-box.styles.css";

export interface ISearchBoxProps {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBox({ placeholder, handleChange }: ISearchBoxProps) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
