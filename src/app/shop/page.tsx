"use client";

import { useState, useEffect } from "react";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData, gymSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Product } from "@/types/product.types";

type ProductArray = Product[];

export default function ShopPage() {
  const [products, setProducts] = useState<ProductArray>(relatedProductData); // Set a default

  useEffect(() => {
    const updateProducts = () => {
      const hash = window.location.hash;
      switch (hash) {
        case "#new-arrivals":
          setProducts(newArrivalsData);
          break;
        case "#top-arrivals":
          setProducts(topSellingData);
          break;
        case "#gym":
          setProducts(gymSellingData);
          break;
        default:
          setProducts(relatedProductData); // Default dataset if no valid hash
          break;
      }
    };

    // Update products on hash change
    window.addEventListener("hashchange", updateProducts);

    // Initial check to set products based on current hash
    updateProducts();

    // Cleanup listener on component unmount
    return () => window.removeEventListener("hashchange", updateProducts);
  }, []);

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
            <hr className="border-t-black/10" />
            <Pagination className="justify-between">
              <PaginationPrevious href="#" className="border border-black/10" />
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                    isActive
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-black/50 font-medium text-sm" />
                </PaginationItem>
                <PaginationItem className="hidden lg:block">
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    8
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="hidden sm:block">
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    9
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-black/50 font-medium text-sm"
                  >
                    10
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>

              <PaginationNext href="#" className="border border-black/10" />
            </Pagination>
          </div>
        </div>
      </div>
    </main>
  );
}
