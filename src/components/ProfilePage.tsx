// components/Profile.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

interface ProfileData {
  name: string
  businessName: string
  registeredDate: string
  contractExpiry: string
  licenseNumber: string
  address: string
  website: string
  email: string
  phone: string
  businessCategory: string
  serviceType: string
  profileImage?: string
}

export default function Profile({ data,setIsLogin }: { data: ProfileData,setIsLogin: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={()=>setIsLogin(false)} className="text-blue-600 hover:text-gray-900">
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - General Information */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            
            <div className="space-y-4">
              <InfoItem label="Name" value={data.name} />
              <InfoItem label="Business Name" value={data.businessName} />
              <InfoItem label="Registered on" value={data.registeredDate} />
              <InfoItem label="Contract Expiry" value={data.contractExpiry} />
              <InfoItem label="License Number" value={data.licenseNumber} />
              <InfoItem label="Current Address" value={data.address} />
              <InfoItem label="Website" value={data.website} />
              <InfoItem label="Official Email" value={data.email} />
              <InfoItem label="Official Phone" value={data.phone} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Business Information</h2>
            
            <div className="space-y-4">
              <InfoItem label="Business Category" value={data.businessCategory} />
              <InfoItem label="Service Type" value={data.serviceType} />
            </div>
          </div>
        </div>

        {/* Right Column - Profile Photo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
          
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg overflow-hidden">
              {data.profileImage ? (
                <Image 
                  src={data.profileImage}
                  alt="Profile"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg 
                    className="w-24 h-24 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8c0 2.208-1.79 4-3.998 4-2.208 0-3.998-1.792-3.998-4s1.79-4 3.998-4c2.208 0 3.998 1.792 3.998 4z" />
                  </svg>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component for info items
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-gray-500 text-sm">{label}:</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}