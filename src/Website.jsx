import React from "react";

export default function Website() {
  return (
    <div className="text-center p-10">
      <img src="/logo.png" alt="Logo" className="mx-auto h-16 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Willkommen bei Kirchbühl Group</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {[1,2,3].map(i => (
          <div key={i} className="border rounded p-4 shadow">
            <img src={`/ipad${i}.jpg`} alt={`iPad ${i}`} className="h-40 mx-auto object-contain" />
            <h2 className="font-semibold mt-4">iPad Modell {i}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
