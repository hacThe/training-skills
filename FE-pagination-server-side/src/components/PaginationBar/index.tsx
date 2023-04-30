import React from "react";
import styled from "@emotion/styled";

const Pagination: React.FC<any> = (props: {
  onPageChange: (count: number) => void;
  currentPage: number;
  count: number;
}) => {
  const PaginationWrapper = styled.div`
    display: flex;
    gap: 24px;
  `;

  const PaginationItem = styled.span`
    cursor: pointer;
    display: inline-block;
    width: 32px;
    heith: 32px;
    line-height: 32px;
    text-alignment: center;
    border-radius: 50%;
    background-color: white;
    color: black;
  `;

  const CurrentPaginationItem = styled.span`
    cursor: pointer;
    display: inline-block;
    width: 32px;
    heith: 32px;
    line-height: 32px;
    text-alignment: center;
    border-radius: 50%;
    background-color: #ffd100;
    color: black;
  `;
  return (
    <PaginationWrapper>
      <PaginationItem onClick={() => props.onPageChange(props.currentPage - 1)}>
        {"<"}
      </PaginationItem>
      {Array.from({ length: 10 }).map((_, index) => {
        if (index + 1 == props.currentPage)
          return (
            <CurrentPaginationItem
              onClick={() => props.onPageChange(index + 1)}
            >
              {index + 1}
            </CurrentPaginationItem>
          );

        return (
          <PaginationItem onClick={() => props.onPageChange(index + 1)}>
            {index + 1}
          </PaginationItem>
        );
      })}
      <PaginationItem onClick={() => props.onPageChange(props.currentPage + 1)}>
        {">"}
      </PaginationItem>
    </PaginationWrapper>
  );
};

export default Pagination;
