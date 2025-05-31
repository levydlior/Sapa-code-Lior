import { pharmaciesArray } from "@/utils/dataArrays";


export default function PharmaciesList() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-green-900">
        Utah Medical Cannabis Pharmacies
      </h2>
      {pharmaciesArray.map((pharmacy, idx) => (
        <div key={idx} className="mb-8 text-sm text-gray-800">
          <h3 className="text-green-700 font-semibold text-lg mb-2">
            {pharmacy.name}
          </h3>

          <div className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1.5fr] gap-4">
            <div>
              {pharmacy.addresses.map((address, i) => (
                <div key={i}>{address}</div>
              ))}
            </div>
            <div>
              {pharmacy.phones.map((phone, i) => (
                <div key={i}>{phone}</div>
              ))}
            </div>
            <div>
              <a
                href={`https://${pharmacy.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pharmacy.website}
              </a>
            </div>
          </div>

          {pharmacy.special && (
            <div className="inline-block bg-[#d6bfa5] text-white px-3 py-1 rounded mt-2 cursor-pointer">
              {pharmacy.special}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}