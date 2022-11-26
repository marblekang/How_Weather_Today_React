import React from "react";
import { ButtonContainer } from "./style";
import { searchKeyword } from "../../../module/searchKeyword/searchKeyword";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changePageType } from "../../../module/store/slices/typeSlice";
export const SearchKeyword = () => {
  const dispatch = useDispatch();
  const clickKeyword = (e) => {
    const { value } = e.target;
    dispatch(changePageType(value));
  };
  return (
    <>
      <ButtonContainer>
        {searchKeyword.asia.map((value) => (
          <Button
            key={value}
            width="20%"
            variant="outline"
            color="#fff"
            onClick={clickKeyword}
            value={value}
            borderRadius="20px"
          >
            {value}
          </Button>
        ))}
      </ButtonContainer>
      <ButtonContainer>
        {searchKeyword.etc.map((value) => (
          <Button
            key={value}
            width="20%"
            variant="outline"
            color="#fff"
            onClick={clickKeyword}
            value={value}
            borderRadius="20px"
          >
            {value}
          </Button>
        ))}
      </ButtonContainer>
    </>
  );
};
