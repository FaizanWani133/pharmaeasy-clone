import { Grid} from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

function ProductsGrid({data}) {
  return (
    <Grid width="100%" gridGap="20px" gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",lg:"repeat(3,1fr)",xl:"repeat(3,1fr)"}}>
      {data.map((el) => (
        <ProductCard
          image={el.img1}
          title={el.desc}
          newPrice={el.newPrice}
          originalPrice={el.originalPrice}
          offer={el.offer}
          id={el.id}

        />
      ))}
    </Grid>
  );
}

export default ProductsGrid;
