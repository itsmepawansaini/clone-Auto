import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Car,
  Fuel,
  CheckCircle2,
  X,
  Loader2,
} from "lucide-react";
import * as carApi from "../../utils/api/carApi";

export default function Cars() {
  const [showForm, setShowForm] = useState(false);
  const [carData, setCarData] = useState([]);
  const [overlayStep, setOverlayStep] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isPrimary, setIsPrimary] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserGarage = async () => {
      try {
        setLoading(true);
        const data = await carApi.getCars();
        setCarData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch user cars:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserGarage();
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedBrand || !selectedModel) return;

  try {
    setLoading(true);

    const payload = {
      carId: selectedBrand._id ,
      model: selectedModel,
      gasType: selectedBrand.gasType,
      isPrimary,
    };

    const savedCar = await carApi.addCar(payload);

    setCarData((prev) => [...prev, savedCar]);

    // reset
    setShowForm(false);
    setOverlayStep(null);
    setSelectedBrand(null);
    setSelectedModel(null);
    setIsPrimary(false);
    setSearch("");

  } catch (err) {
    alert("Failed to add car");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="bg-gray-50/50 min-h-screen pb-20">
      <div className="container mx-auto px-4 pt-10 max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
              My Garage
            </h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Manage your vehicles for quick booking
            </p>
          </div>
          <button
            onClick={() => {
              setShowForm(true);
              setOverlayStep("brand");
            }}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg active:scale-95"
          >
            <Plus size={16} /> Add Vehicle
          </button>
        </div>

        {/* Garage List */}
        {loading && !showForm ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-[#b4aa12]" size={40} />
          </div>
        ) : carData.length === 0 ? (
          <div className="bg-white p-16 rounded-[2.5rem] text-center border border-gray-100 shadow-sm">
            <Car className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-sm font-bold text-gray-900 uppercase">
              Your garage is empty
            </p>
            <button
              onClick={() => {
                setShowForm(true);
                setOverlayStep("brand");
              }}
              className="text-[#b4aa12] font-black text-xs uppercase border-b-2 border-[#b4aa12] pb-1 mt-4"
            >
              Register First Car
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carData.map((car) => (
              <div
                key={car?._id}
                className={`group relative p-8 rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  car.isPrimary
                    ? "bg-white border-[#b4aa12] shadow-lg"
                    : "bg-white border-gray-100"
                }`}
              >
                {car.isPrimary && (
                  <div className="absolute top-6 right-6 bg-[#b4aa12] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">
                    <CheckCircle2 className="inline mr-1" size={10} /> Primary
                  </div>
                )}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center p-4">
                    {car.logo && (
                      <img
                        src={car.logo}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-gray-900 uppercase">
                      {car.brandName} {car.model}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-2 text-gray-400">
                      <Fuel size={12} />
                      <span className="text-[10px] font-bold uppercase">
                        {car.gasType}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 flex justify-center">
                  {!car.isPrimary ? (
                    <button
                      onClick={() => setPrimaryCar(car?._id)}
                      className="text-[10px] font-black text-gray-400 uppercase hover:text-[#b4aa12]"
                    >
                      Set as Primary
                    </button>
                  ) : (
                    <span className="text-[10px] font-black text-[#b4aa12] uppercase tracking-widest">
                      Primary Vehicle
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>

        {showForm && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setShowForm(false)}
          >
            <div
              className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black"
              >
                <X size={24} />
              </button>

              {overlayStep === "brand" && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h2 className="text-2xl font-black text-gray-900 uppercase mb-6">
                    Select Brand
                  </h2>
                  <div className="relative mb-6">
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="SEARCH BRANDS..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl text-xs font-bold outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2">
                    {carData.map((brand) => (
                      <div
                        key={brand._id}
                        onClick={() => {
                          setSelectedBrand(brand);
                          setOverlayStep("model");
                        }}
                        className="cursor-pointer group flex flex-col items-center justify-center border p-5 rounded-2xl hover:bg-black transition-all"
                      >
                        {brand.logo && (
                          <img
                            src={brand.logo}
                            alt=""
                            className="h-8 mb-2 group-hover:invert"
                          />
                        )}
                        <span className="text-[10px] font-black uppercase group-hover:text-white">
                          {brand.brandName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {overlayStep === "model" && selectedBrand && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl font-black text-gray-900 uppercase mb-2">
                    Select Model
                  </h2>
                  <p className="text-xs font-bold text-[#b4aa12] uppercase mb-8 text-center">
                    {selectedBrand.brandName || selectedBrand.name}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {(selectedBrand.models || []).map((model) => (
                      <div
                        key={model}
                        onClick={() => {
                          setSelectedModel(model);
                          setOverlayStep("gas");
                        }}
                        className="cursor-pointer flex items-center justify-between p-4 bg-gray-50 rounded-2xl font-black text-xs uppercase hover:bg-black hover:text-white transition-all"
                      >
                        {model}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {overlayStep === "gas" && selectedModel && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 text-center">
                  <h2 className="text-2xl font-black text-gray-900 uppercase mb-6">
                    Fuel Type
                  </h2>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="cursor-pointer text-center border-2 border-gray-100 py-4 rounded-2xl font-black text-[10px] uppercase hover:border-[#b4aa12] transition-all">
                      {selectedBrand.gasType}
                    </div>
                  </div>
                  <label className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isPrimary}
                      onChange={(e) => setIsPrimary(e.target.checked)}
                      className="w-4 h-4 accent-[#b4aa12]"
                    />
                    <span className="text-[10px] font-black text-gray-600 uppercase">
                      Set as Main Garage Vehicle
                    </span>
                  </label>
                  <button
  type="submit"
  disabled={loading}
  className="mt-6 w-full bg-black text-white py-4 rounded-2xl font-black uppercase hover:bg-gray-800"
>
  {loading ? "Saving..." : "Add Vehicle"}
</button>

                </div>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
