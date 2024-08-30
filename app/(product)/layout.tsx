// import React from "react";

import CategoryList from "@/components/CategoryList";
import { getCategories } from "@/sanity/lib/category-query";

type LayoutProps = React.PropsWithChildren;

export default async function Layout({ children }: LayoutProps) {
  const queryResults = await getCategories();
  return (
    <>
      {children}
      <CategoryList className="xl:mb-[168px] mb-[120px]">
        {queryResults.map((val, ind) => {
          return (
            <CategoryList.Item
              categoryImg={val.categoryImage}
              name={val.name}
              key={ind}
            />
          );
        })}
      </CategoryList>
    </>
  );
}
