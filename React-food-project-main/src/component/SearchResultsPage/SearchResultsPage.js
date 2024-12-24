import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


function SearchResultsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const products = useSelector((state) => state.products.items); // Lấy sản phẩm từ Redux store
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Kết quả tìm kiếm cho: "{query}"</h1>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <img src={product.url} alt={product.title} width="50" />
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
