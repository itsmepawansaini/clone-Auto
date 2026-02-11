// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useOrder } from "../../context/OrderContext";
// import { Check } from "lucide-react";
// import { getPackages } from "../../utils/api/packageApi"; //
// import "swiper/css";
// import "swiper/css/navigation";

// const Package = () => {
//   const navigate = useNavigate();
//   const { userInfo, selectedPackage, setSelectedPackage, coupon, setCoupon, discount, setDiscount, primaryCar } = useOrder(); //
  
//   const [packages, setPackages] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const taxRate = 0.1;

//   // Fetch data from API
//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         setLoading(true);
//         const data = await getPackages();
//         setPackages(data);
//       } catch (error) {
//         console.error("Failed to load plans");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPlans();
//   }, []);

//   const handleApplyCoupon = () => {
//     if (coupon.toUpperCase() === "SAVE20") {
//       setDiscount(20000); 
//     } else {
//       setDiscount(0);
//       alert("Invalid Coupon!");
//     }
//   };

//   const packagePrice = selectedPackage ? Number(selectedPackage.price) : 0;
//   const subtotal = packagePrice > 0 ? packagePrice - discount : 0;
//   const tax = subtotal * taxRate;
//   const total = subtotal + tax;

//   return (
//     <>
//       <section className="section-xl">
//         <div className="container mx-auto px-4">
//           <div className="flex gap-15 mobilefix">
//             <div className="w-full xl:w-3/5">
//               <div className="pbminfotech-ele-ptable-style-3">
//                 <div className="pbmit-ptable-cols flex flex-wrap">
//                   {loading ? (
//                     <div className="w-full text-center py-10 font-bold uppercase tracking-widest">Loading Plans...</div>
//                   ) : (
//                     packages.map((pkg) => (
//                       <div
//                         key={pkg._id || pkg.name}
//                         className={`pbmit-ptable-col w-full md:w-1/2 lg:w-1/3 ${
//                           pkg.featured ? "pbmit-pricing-table-featured-col" : ""
//                         }`}>
//                         <div className="pbmit-pricing-table-box">
//                           {pkg.featured && (
//                             <div className="pbmit-feature-wrap">
//                               <div className="pbmit-ptablebox-featured-w" />
//                             </div>
//                           )}
//                           <div className="pbmit-pricing-table-inner">
//                             <div className="pbmit-head-wrap">
//                               <h3 className="pbminfotech-ptable-heading">{pkg.name}</h3>
//                               <div className="pbmit-price-wrapper">
//                                 <div className="pbmit-ptable-price-w">
//                                   <div className="pbminfotech-ptable-symbol">TZS</div>
//                                   <div className="pbminfotech-ptable-price">{pkg.price.toLocaleString()}</div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div>
//                               <div className="pbmit-ptable-lines">
//                                 {pkg.features && pkg.features.map((feature, idx) => (
//                                   <div key={idx} className="pbmit-ptable-line">
//                                     <Check className="ti-check inline mr-2" size={22} strokeWidth={1.5} />
//                                     {feature}
//                                   </div>
//                                 ))}
//                               </div>
//                               <div
//                                 className={`pbmit-ptable-recommendation mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${
//                                   pkg.featured ? "bg-[#212121] text-white" : "bg-gray-100 text-gray-600"
//                                 }`}>
//                                 {pkg.note || "Recommended"}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="pbmit-price-btn">
//                             <a onClick={() => setSelectedPackage(pkg)} className="pbmit-button cursor-pointer">
//                               <span className="pbmit-button-text">
//                                 {pkg.name === selectedPackage?.name ? "Already in Cart" : "Add To Cart"}
//                               </span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="w-full xl:w-2/5">
//               <div className="sticky top-35 bg-gray-100 rounded-2xl p-10">
//                 {primaryCar && (
//                   <div className="mb-4">
//                     {primaryCar.logo && (
//                       <img
//                         src={primaryCar.logo}
//                         alt={`${primaryCar.brand} ${primaryCar.model}`}
//                         className="max-w-[60px] h-auto rounded"
//                       />
//                     )}
//                     <h4 className="mt-2 font-bold text-md" style={{ fontSize: "26px" }}>
//                       {primaryCar.brand} {primaryCar.model}{" "}
//                       <span className="text-[#9b9b9b]">({primaryCar.gas})</span>
//                     </h4>
//                   </div>
//                 )}

//                 {selectedPackage ? (
//                   <div className="mt-4 p-10 bg-white rounded-xl">
//                     <div className="flex items-center justify-between mb-3">
//                       <h4 className="font-bold text-md" style={{ fontSize: "20px" }}>
//                         {selectedPackage.name}
//                       </h4>
//                       <button
//                         onClick={() => {
//                           setSelectedPackage(null);
//                           setDiscount(0);
//                           setCoupon("");
//                         }}
//                         className="bg-gray-300 cursor-pointer hover:scale-105 transition-all text-gray-500 px-2 py-0.5 rounded-full text-sm font-semibold">
//                         x
//                       </button>
//                     </div>

//                     <div className="mb-2 flex">
//                       <input
//                         type="text"
//                         placeholder="Enter coupon code"
//                         value={coupon}
//                         onChange={(e) => setCoupon(e.target.value)}
//                         className="border border-gray-200 px-3 py-2 mr-2 rounded-xl w-[80%]"
//                       />
//                       <button
//                         onClick={handleApplyCoupon}
//                         className="bg-[#b4aa12] text-white px-4 font-semibold cursor-pointer py-2 rounded-xl">
//                         Apply
//                       </button>
//                     </div>

//                     {discount > 0 && (
//                       <div className="flex items-center justify-between text-green-600">
//                         <span>Coupon applied: -TZS {discount.toLocaleString()}</span>
//                         <button
//                           onClick={() => {
//                             setCoupon("");
//                             setDiscount(0);
//                           }}
//                           className="text-red-500 font-semibold ml-2 cursor-pointer">
//                           Remove
//                         </button>
//                       </div>
//                     )}

//                     <div className="border-t border-gray-200 mt-4 pt-2">
//                       <p className="m-b-0">Subtotal: TZS {subtotal.toLocaleString()}</p>
//                       <p>Tax (10%): TZS {tax.toLocaleString()}</p>
//                       <p className="font-bold">Total: TZS {total.toLocaleString()}</p>
//                     </div>

//                     <button
//                       className="w-full mt-4 bg-[#b4aa12] font-semibold cursor-pointer text-white py-2.5 rounded-xl"
//                       onClick={() => navigate("/checkout")}
//                       disabled={!selectedPackage}>
//                       Continue to Checkout
//                     </button>
//                   </div>
//                 ) : (
//                   <p>Your cart is empty</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Package;