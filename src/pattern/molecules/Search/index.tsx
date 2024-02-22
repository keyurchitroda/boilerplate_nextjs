"use client";
import MuiButton from "@/pattern/atoms/mui_button";
import MuiTextField from "@/pattern/atoms/mui_textfield";
import React from "react";

const Search = () => {
  const handleChange = () => {
    console.log("change");
  };
  const onSearch = () => {};

  return (
    <div>
      <MuiTextField label="Search" name="search" onChange={handleChange} />
      <MuiButton onClick={onSearch}> Search </MuiButton>
    </div>
  );
};

export default Search;
