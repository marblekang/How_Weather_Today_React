import React, { useState } from "react";
import { InputContainer } from "./style";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { Input } from "@chakra-ui/react";
import { changePageType } from "../../../module/store/slices/typeSlice";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(0);
  const setInputValueState = (e) => {
    const { value } = e.target;
    const regex = /^[A-Za-z\s]*$/;
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      if (regex.test(value)) {
        setInputValue(value);
      } else {
        alert("영문만 입력 가능합니다.");
      }
      setInputValue(value);
    }, 50);
    setTimer(newTimer);
  };

  const transferSearchValue = () => {
    dispatch(changePageType(inputValue));
    setInputValue("");
  };

  return (
    <>
      <InputContainer>
        <FaSearch
          color="#fff"
          className="searchIcon"
          onClick={transferSearchValue}
        />
        <Input
          type="text"
          onChange={setInputValueState}
          id="searchInput"
          color="#fff"
          placeholder="Search"
          _placeholder={{ opacity: 1, color: "inherit" }}
          variant="flushed"
          value={inputValue}
        />
      </InputContainer>
    </>
  );
};
