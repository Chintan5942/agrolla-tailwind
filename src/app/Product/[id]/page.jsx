// "use client";
// import { useParams } from "next/navigation";
// import Navbar from "../../HomePage/Navbar";
// import Footer from "../../HomePage/Footer";
// import Categories from "../../HomePage/Categories";
// import SelectedProduct from "@/app/Product/SelectedProduct";
// import productsData from "../../HomePage/productsData";

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const product = productsData.find((p) => p.id.toString() === id);

//   if (!product) {
//     return (
//       <>
//         <Categories />
//         <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
//           Product not found.
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <SelectedProduct product={product} />
//     </>
//   );
// }
// // "use client";
// // import { useParams } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import SelectedProduct from "@/app/Product/SelectedProduct";
// // import Categories from "@/app/HomePage/Categories";
// // import { supabase } from "@/lib/supabaseClient";

// // export default function ProductDetailPage() {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       const { data, error } = await supabase
// //         .from("products")
// //         .select("*")
// //         .eq("id", id)
// //         .single();

// //       if (error) {
// //         console.error("Error fetching product:", error);
// //         setProduct(null);
// //       } else {
// //         setProduct(data);
// //       }

// //       setLoading(false);
// //     };

// //     if (id) fetchProduct();
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <>
// //         <Categories />
// //         <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
// //           Loading product...
// //         </div>
// //       </>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <>
// //         <Categories />
// //         <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
// //           Product not found.
// //         </div>
// //       </>
// //     );
// //   }

// //   return (
// //     <>
// //       <SelectedProduct product={product} />
// //     </>
// //   );
// // }
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SelectedProduct from "@/app/Product/SelectedProduct";
import Categories from "@/app/HomePage/Categories";
import { supabase } from "@/lib/supabaseClient";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    if (id) fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="fixed top-0 left-0 w-full h-2 bg-green-500 animate-pulse z-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-pulse space-y-10">
          <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="h-[300px] bg-gray-200 rounded-xl"></div>
              <div className="flex gap-2 overflow-x-auto">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-20 w-28 bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <div className="h-6 bg-gray-300 rounded w-2/3"></div>
              <div className="h-5 bg-gray-200 rounded w-1/2"></div>
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-6 bg-gray-300 rounded w-1/4 mt-8"></div>
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <div className="flex items-center justify-center text-xl font-semibold text-gray-600 h-96">
          Product not found.
        </div>
      </>
    );
  }

  return (
    <>
      <SelectedProduct product={product} />
    </>
  );
}
