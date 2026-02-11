import React from "react";
// import { useOrder } from "../../context/ApiContext";
import { User, Mail, Phone, Car } from "lucide-react";

const Profile = () => {
  // const { userInfo } = useOrder();

  const userInfo = {
    name: "John Doe",
    email: "",
  };

  if (!userInfo) {
    return (
      <div className="section-xl flex items-center justify-center min-h-screen">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="section-xl min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#b4aa12] h-32 w-full"></div>
          <div className="px-8 pb-8">
            <div className="relative -mt-12 mb-6">
              <div className="w-24 h-24 bg-black border-4 border-white rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                {userInfo.name?.charAt(0)}
              </div>
            </div>

            <h2 className="text-3xl font-black mb-1">{userInfo.name}</h2>
            <p className="text-gray-500 mb-8">
              Customer since {new Date().getFullYear()}
            </p>

            <div className="grid gap-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <Mail className="text-[#b4aa12]" size={20} />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Email Address
                  </p>
                  <p className="font-semibold">{userInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <Phone className="text-[#b4aa12]" size={20} />
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold">
                    Phone Number
                  </p>
                  <p className="font-semibold">
                    {userInfo.phone || "Not provided"}
                  </p>
                </div>
              </div>

              {userInfo.carDetails && (
                <div className="mt-4">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Car size={18} /> Registered Vehicle
                  </h4>
                  <div className="p-6 border border-gray-100 rounded-2xl flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold">
                        {userInfo.carDetails.brand} {userInfo.carDetails.model}
                      </p>
                      <p className="text-sm text-gray-500">
                        {userInfo.carDetails.gas} Engine
                      </p>
                    </div>
                    <img
                      src={userInfo.carDetails.logo}
                      alt="brand"
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
