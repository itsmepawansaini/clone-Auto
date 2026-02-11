/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import { useOrder } from "../context/ApiContext";
import * as userApi from "../utils/api/userApi"; //
import Honda from "../assets/images/honda.jpeg";
import Toyota from "../assets/images/totota.jpeg";
import Tata from "../assets/images/tata.jpeg";
import Volkswagen from "../assets/images/volkswagen.jpeg";
import useAuthStore from "../store/authStore";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const navigate = useNavigate();
  // const { setUserInfo, loading } = useOrder();

  const [authStep, setAuthStep] = useState("register");
    const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpArray, setOtpArray] = useState(new Array(6).fill(""));

  const [name, setName] = useState("");
  const [carDetails, setCarDetails] = useState(null);
  const [overlayStep, setOverlayStep] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [search, setSearch] = useState("");
   const { checkSession } = useAuthStore();

  const brands = [
    {
      id: 1,
      name: "Toyota",
      logo: Toyota,
      models: ["Corolla", "Camry", "RAV4"],
    },
    { id: 2, name: "Honda", logo: Honda, models: ["Civic", "Accord", "CR-V"] },
    { id: 3, name: "Tata", logo: Tata, models: ["Safari", "Harrier", "Nexon"] },
    {
      id: 4,
      name: "Volkswagen",
      logo: Volkswagen,
      models: ["Golf", "Passat", "Tiguan"],
    },
  ];

  const gasTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    if (!isOpen) {
      setAuthStep("register");
      setOtp("");
      setOtpArray(new Array(6).fill(""));
      setPhone("");
      setName("");
      setCarDetails(null);
    }
  }, [isOpen]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;

    try {
      const payload = {
        phone,
        name,
        carId: "698ac3464ad16705cf5f928e",
        model: "Corolla",
        gasType: "Petrol",
      };
      await userApi.sendOtp(payload);
      setAuthStep("otp");
    } catch (error) {
      alert("Error initiating authentication. Please try again.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (otp === "123456") {
      try {
        const response = await userApi.verifyOtp(phone, otp);

        if (response.user) {
          // setUserInfo(response.user);
          onClose();
          navigate("/orders");
        }
      } catch (error) {
        alert("Verification failed on server. Please try again.");
      }
    } else {
      alert("Invalid OTP. Hint: Use 123456");
    }
  };
  const handleSendLoginOtp = async (e) => {
    e.preventDefault();
    if (phone.length < 10) return;

    try {
      const payload = phone;
      await userApi.sentLoginOtp(payload);
      setAuthStep("otp");
    } catch (error) {
      alert("Error initiating authentication. Please try again.");
    }
  };

  const handleVerifLoginOtp = async (e) => {
    e.preventDefault();

    if (otp === "123456") {
      try {
        const response = await userApi.verifyLoginOtp(phone, otp);

        if (response.user) {
          // setUserInfo(response.user);
          onClose();
          await checkSession();
          navigate("/orders");
        }
      } catch (error) {
        alert("Verification failed on server. Please try again.");
      }
    } else {
      alert("Invalid OTP. Hint: Use 123456");
    }
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otpArray];
    newOtp[index] = element.value;
    setOtpArray(newOtp);
    setOtp(newOtp.join(""));
    if (element.value !== "" && element.nextElementSibling) {
      element.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otpArray[index] &&
      e.target.previousElementSibling
    ) {
      e.target.previousElementSibling.focus();
    }
  };

  const handleSelectGas = (gas) => {
    setCarDetails({
      brand: selectedBrand.name,
      model: selectedModel,
      gas,
      logo: selectedBrand.logo,
    });
    setOverlayStep(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 sm:p-10 relative overflow-y-auto max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>

            {loading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b4aa12]"></div>
              </div>
            )}

            {authStep === "register" && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <h2 className="text-2xl font-bold">Register</h2>
                <p className="text-gray-600">
                  Enter your details to create an account.
                </p>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#b4aa12]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#b4aa12]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Car Details
                  </label>
                  <div
                    onClick={() => setOverlayStep("brand")}
                    className={`w-full border rounded-xl px-3 py-2.5 cursor-pointer ${carDetails ? "border-black bg-white" : "border-gray-300 bg-gray-50"}`}
                  >
                    {carDetails
                      ? `${carDetails.brand} ${carDetails.model} (${carDetails.gas})`
                      : "Select Car Brand & Model"}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!carDetails || !name || phone.length < 10}
                  className={`w-full font-semibold py-3 rounded-xl transition ${carDetails && name && phone.length >= 10 ? "bg-[#b4aa12] text-white hover:bg-[#8e860e]" : "bg-gray-200 text-gray-400"}`}
                >
                  Continue
                </button>
                <p className="text-center mt-2 text-sm text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthStep("login")}
                    className="text-[#b4aa12] font-medium"
                  >
                    Login
                  </button>
                </p>
              </form>
            )}

            {authStep === "login" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Login</h2>
                <p className="text-gray-500">
                  Welcome back! Enter your phone to login.
                </p>
                <form onSubmit={handleSendLoginOtp} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#b4aa12]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={phone.length < 10}
                    className={`w-full font-semibold py-3 rounded-xl transition ${phone.length >= 10 ? "bg-[#b4aa12] text-white hover:bg-[#8e860e]" : "bg-gray-200 text-gray-400"}`}
                  >
                    Send OTP
                  </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                  New here?{" "}
                  <button
                    type="button"
                    onClick={() => setAuthStep("register")}
                    className="text-[#b4aa12] font-medium"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            )}

            {authStep === "otp" && (
              <form onSubmit={handleVerifLoginOtp} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold">Verify OTP</h2>
                  <p className="text-gray-600 mt-2">Sent to {phone}</p>
                </div>
                <div className="flex justify-between gap-2">
                  {otpArray.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-full h-12 text-center text-xl font-bold border border-gray-300 rounded-xl focus:border-[#b4aa12] focus:ring-2 focus:ring-[#b4aa12] outline-none"
                      value={data}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={otp.length < 6}
                  className={`w-full font-semibold py-4 rounded-xl transition-all ${otp.length === 6 ? "bg-black text-white" : "bg-gray-200 text-gray-400"}`}
                >
                  Verify & Continue
                </button>
                <button
                  type="button"
                  onClick={() => setAuthStep(name ? "register" : "login")}
                  className="w-full text-sm text-gray-400 mt-2"
                >
                  Edit details / Go back
                </button>
              </form>
            )}
          </motion.div>

          <AnimatePresence>
            {overlayStep && (
              <motion.div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60] px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOverlayStep(null)}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative max-h-[85vh] overflow-y-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {overlayStep === "brand" && (
                    <div>
                      <h2 className="text-lg font-semibold mb-4">
                        Select Brand
                      </h2>
                      <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full mb-4 px-3 py-2 border rounded-xl outline-none"
                      />
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {filteredBrands.map((brand) => (
                          <div
                            key={brand.id}
                            onClick={() => {
                              setSelectedBrand(brand);
                              setOverlayStep("model");
                            }}
                            className="cursor-pointer text-center border p-3 rounded-xl hover:bg-gray-100"
                          >
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="h-8 mx-auto mb-2"
                            />
                            <span className="text-sm">{brand.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {overlayStep === "model" && selectedBrand && (
                    <div>
                      <h2 className="text-lg font-semibold mb-4">
                        Select Model
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedBrand.models.map((model) => (
                          <div
                            key={model}
                            onClick={() => {
                              setSelectedModel(model);
                              setOverlayStep("gas");
                            }}
                            className="cursor-pointer text-center border p-3 rounded-xl hover:bg-gray-100"
                          >
                            {model}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {overlayStep === "gas" && (
                    <div>
                      <h2 className="text-lg font-semibold mb-4">
                        Select Gas Type
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        {gasTypes.map((gas) => (
                          <div
                            key={gas}
                            onClick={() => handleSelectGas(gas)}
                            className="cursor-pointer text-center border p-3 rounded-xl hover:bg-gray-100"
                          >
                            {gas}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
