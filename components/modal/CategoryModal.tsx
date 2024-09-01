"use client";
import React, { useEffect } from "react";
import { Modal, Overlay } from "./Modal";
import CategoryList from "../CategoryList";
import { CategoryType } from "@/sanity/lib/types";

type CategoryModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  categoryInfo: CategoryType[];
};

export default function CategoryModal({
  categoryInfo,
  setShowModal,
}: CategoryModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <Overlay
      id="categoryOverlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowModal(false);
      }}
      className={"absolute z-10 w-full h-full bg-black bg-opacity-50 top-0"}
    >
      <Modal className="absolute z-20 top-[90px] left-0 right-0 w-full md:h-[340px] h-[750px] flex justify-center">
        <CategoryList className="flex flex-col">
          {categoryInfo.map((val, ind) => {
            return (
              <CategoryList.Item
                categoryImg={val.categoryImage}
                name={val.name}
                key={ind}
                onClick={() => setShowModal(false)}
              />
            );
          })}
        </CategoryList>
      </Modal>
    </Overlay>
  );
}
