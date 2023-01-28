import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
