import React, { useEffect } from "react";
import { AppBarContainer, AlignContainer } from "./style";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
