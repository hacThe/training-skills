import React from "react";
import { Product } from "../objects/product";
import styled from "@emotion/styled";

const ProductCardWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  align-items: center;
  gap: 24px;
`;

const ProductCardTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  text-transform: capitalize;
  color: black;
  margin-bottom: 16px;
`;

const ProductCardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #808080;
`;

const ProductCardThumbnail = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;
const ProductCardPrice = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 43px;
  line-height: 120%;
  color: #941b0c;
`;

const ProductCard: React.FC<Product> = (props: Product) => {
  return (
    <ProductCardWrapper>
      <ProductCardThumbnail src={props.thumbnail} />
      <div>
        <ProductCardTitle>{props.title}</ProductCardTitle>
        <ProductCardDescription>{props.description}</ProductCardDescription>
        <ProductCardPrice>{props.price}</ProductCardPrice>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
