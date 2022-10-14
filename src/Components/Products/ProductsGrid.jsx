import { Grid, Skeleton} from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

function ProductsGrid({data,loading}) {
  return (
    <Grid width="100%" gridGap="20px" justifyItems={"center"} gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(3,1fr)",lg:"repeat(4,1fr)",xl:"repeat(3,1fr)"}}>
      {loading && data.map(el=>(<Skeleton borderRadius={"10px"}>
        <ProductCard
          image={el.img1}
          title={el.desc}
          newPrice={el.newPrice}
          originalPrice={el.originalPrice}
          offer={el.offer}
          id={el.id}
          key={el.id}

        />
        </Skeleton>))}
      {loading === false && data.map((el) => (
        <ProductCard
          image={el.img1}
          title={el.desc}
          newPrice={el.newPrice}
          originalPrice={el.originalPrice}
          offer={el.offer}
          id={el.id}
          key={el.id}

        />
      ))}
    </Grid>
  );
}

export default ProductsGrid;
