import React, { useEffect, useState } from "react";
import { AppBarContainer, AlignContainer } from "./style";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePageType } from "../../../module/store/slices/typeSlice";

export const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const type = useSelector((state) => state.type.value);
  const dispatch = useDispatch();

  const movePage = (page) => {
    navigate(page);
  };
  useEffect(() => {}, []);

  return (
    <AppBarContainer>
      <AlignContainer pathname={location.pathname}>
        {location.pathname === "/search" && (
          <FaArrowLeft
            onClick={() => {
              movePage("/");
            }}
          />
        )}
        <FaSearch
          onClick={() => {
            movePage("/search");
          }}
        />
      </AlignContainer>
    </AppBarContainer>
  );
};
