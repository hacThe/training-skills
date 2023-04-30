import React, { useState } from "react";
import useSWR from "swr";
import { services } from "../../services";
import ProductCard from "../../components/ProductCard";
import styled from "@emotion/styled";
import { Container } from "../../components/Container";
import Pagination from "../../components/PaginationBar";

const PaginateWithUseSWR: React.FC = () => {
  const PAGE_LIMIT = 9;
  const [pageNum, setPageNum] = useState(1);
  const { data, error, isLoading } = useSWR(
    `/products?limit=${PAGE_LIMIT}&skip=${(pageNum - 1) * PAGE_LIMIT}`,
    async () => {
      return await services.getAll({
        limit: PAGE_LIMIT,
        skip: (pageNum - 1) * PAGE_LIMIT,
      });
    }
  );

  const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  `;

  const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
  `;

  if (isLoading) return <h1>Loading...</h1>;
  if (error)
    return (
      <div>
        <h1>Opps, error occurs</h1>
        <p>{error}</p>
      </div>
    );
  return (
    <Container>
      <h1>Pagination server side with useSWR</h1>
      <ProductList>
        {data?.products?.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ProductList>
      <PaginationWrapper>
        <Pagination
          onPageChange={(page: number) => setPageNum(page)}
          currentPage={pageNum}
          count={Math.ceil((data?.total ?? 0) / PAGE_LIMIT)}
        />
      </PaginationWrapper>
    </Container>
  );
};

export default PaginateWithUseSWR;
