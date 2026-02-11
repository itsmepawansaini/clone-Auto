// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useOrder } from "../../context/ApiContext";
// import Modal from "../../components/Modal";
// import { Calendar, Clock, Car, Package, ShieldCheck, ChevronRight, Check } from "lucide-react";

// const Orders = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isPreBooking, setIsPreBooking] = useState(false); // Toggle for vehicle selection
//   const [isSwitchingCar, setIsSwitchingCar] = useState(false); // Toggle for car list
  
//   const { orders, userInfo, setUserInfo, cars, primaryCar, setPrimaryCar } = useOrder();

//   const myOrders = orders.filter((order) => {
//     const customerPhone = order.customer?.phone || order.customerDetails?.phone || order.phone;
//     return customerPhone === userInfo?.phone;
//   });

//   if (!userInfo) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
//         <ShieldCheck className="w-12 h-12 text-gray-300 mb-4" />
//         <h2 className="text-xl font-bold text-gray-900">Login Required</h2>
//         <p className="text-sm text-gray-500 mb-6">Please log in to view your bookings.</p>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-black text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm"
//         >
//           Login
//         </button>
//         <Modal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onSubmit={(data) => {
//             setIsModalOpen(false);
//             setUserInfo(data);
//             navigate("/orders");
//           }}
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50/50 min-h-screen pb-20">
//       <div className="container mx-auto px-4 pt-10 max-w-4xl">
        
//         {/* Header Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
//           <div>
//             <h2 className="text-2xl font-black text-gray-900 tracking-tight">My Bookings</h2>
//             <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 font-medium">
//               <span className="text-black font-semibold">{userInfo.name}</span>
//               <span className="text-gray-300">•</span>
//               <span>{userInfo.phone}</span>
//             </div>
//           </div>
//           <button 
//             onClick={() => setIsPreBooking(true)}
//             className="w-full sm:w-auto bg-black text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors"
//           >
//             + New Booking
//           </button>
//         </div>

//         {/* --- NEW PRE-BOOKING VEHICLE SELECTION OVERLAY --- */}
//         {isPreBooking && (
//           <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//             <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
//               <h3 className="text-xl font-black mb-2 text-gray-900">Confirm Vehicle</h3>
//               <p className="text-xs text-gray-500 mb-6">Select the vehicle for this service.</p>

//               <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Active Vehicle</span>
//                   {cars.length > 1 && (
//                     <button 
//                       onClick={() => setIsSwitchingCar(!isSwitchingCar)}
//                       className="text-[10px] font-black uppercase text-[#b4aa12] hover:underline"
//                     >
//                       {isSwitchingCar ? "Cancel" : "Change"}
//                     </button>
//                   )}
//                 </div>

//                 {!isSwitchingCar ? (
//                   <div className="flex items-center gap-3">
//                     <Car className="w-5 h-5 text-[#b4aa12]" />
//                     <span className="font-bold text-gray-900">
//                       {primaryCar ? `${primaryCar.brand} ${primaryCar.model} (${primaryCar.gas})` : "No car added"}
//                     </span>
//                   </div>
//                 ) : (
//                   <div className="space-y-2 mt-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
//                     {cars.map((car) => (
//                       <div 
//                         key={car.id}
//                         onClick={() => {
//                           setPrimaryCar(car.id);
//                           setIsSwitchingCar(false);
//                         }}
//                         className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer transition-all ${
//                           car.isPrimary ? "bg-white border-[#b4aa12] ring-1 ring-[#b4aa12]" : "bg-white border-gray-100 hover:border-gray-300"
//                         }`}
//                       >
//                         <span className="text-xs font-bold">{car.brand} {car.model}</span>
//                         {car.isPrimary && <Check className="w-3 h-3 text-[#b4aa12]" />}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div className="flex gap-3">
//                 <button 
//                   onClick={() => { setIsPreBooking(false); setIsSwitchingCar(false); }}
//                   className="w-1/2 py-3 rounded-xl border border-gray-100 text-xs font-bold uppercase tracking-widest text-gray-400"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   onClick={() => navigate("/packages")}
//                   disabled={!primaryCar}
//                   className={`w-1/2 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-white shadow-lg ${
//                     !primaryCar ? "bg-gray-200" : "bg-black hover:bg-gray-800"
//                   }`}
//                 >
//                   Confirm & Go
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* --- BOOKING LIST --- */}
//         {myOrders.length === 0 ? (
//           <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-sm">
//             <Package className="w-8 h-8 text-gray-200 mx-auto mb-3" />
//             <p className="text-sm font-bold text-gray-900">No bookings yet</p>
//             <p className="text-xs text-gray-500 mb-6">Your scheduled services will appear here.</p>
//             <button
//               onClick={() => setIsPreBooking(true)}
//               className="bg-[#b4aa12] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
//             >
//               Start First Booking
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {myOrders.map((order) => (
//               <div
//                 key={order.id}
//                 className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#b4aa12]/30 transition-all overflow-hidden"
//               >
//                 <div className="p-4 sm:p-5">
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="space-y-1">
//                       <div className="flex items-center gap-2">
//                         <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider ${
//                           order.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
//                         }`}>
//                           {order.status}
//                         </span>
//                         <span className="text-[10px] text-gray-400 font-medium">#{order.id}</span>
//                       </div>
//                       <h3 className="text-base font-bold text-gray-900 sizes">{order.order.packageName}</h3>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">Total</p>
//                       <p className="text-lg font-black text-black">
//                         <span className="text-[10px] mr-0.5">TZS</span>
//                         {order.order.total?.toLocaleString()}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
//                     <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl">
//                       <Calendar className="w-4 h-4 text-[#b4aa12]" />
//                       <div>
//                         <p className="text-[8px] text-gray-400 font-bold uppercase ">Date</p>
//                         <p className="text-[11px] font-bold text-gray-800 sizel">{order.appointment.date}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-xl">
//                       <Clock className="w-4 h-4 text-[#b4aa12]" />
//                       <div>
//                         <p className="text-[8px] text-gray-400 font-bold uppercase">Time</p>
//                         <p className="text-[11px] font-bold text-gray-800 sizel">{order.appointment.timeSlot}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3 bg-[#b4aa12]/5 p-2.5 rounded-xl border border-[#b4aa12]/10">
//                       <Car className="w-4 h-4 text-[#b4aa12]" />
//                       <div className="min-w-0">
//                         <p className="text-[8px] text-[#b4aa12] font-bold uppercase">Vehicle</p>
//                         <p className="text-[11px] font-bold text-gray-800 truncate sizel">
//                            {order.carDetails?.brand || order.car?.brand} {order.carDetails?.model || order.car?.model}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={(data) => {
//           setIsModalOpen(false);
//           setUserInfo(data);
//           navigate("/orders");
//         }}
//       />
//     </div>
//   );
// };

// export default Orders;