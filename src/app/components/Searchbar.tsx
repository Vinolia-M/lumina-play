import React, { useState } from "react";
import Image from "next/image";
import SearchImage from "../../../public/search.svg"; // Adjust the path as needed
import styles from "../components/Searchbar.module.css";

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (query === "") {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className={`${styles.searchBarContainer} ${
        isExpanded ? styles.expanded : ""
      }`}
      onClick={handleSearchClick}
    >
      <Image
        src={SearchImage}
        alt="Search Icon"
        width={20}
        height={20}
        className={styles.searchIcon}
      />
      {isExpanded && (
        <input
          type="text"
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchBar;
