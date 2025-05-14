import React, { useState } from 'react';
import { X } from 'lucide-react';

const medicines = [
  {
    storedAt: 'S12/Rac4',
    batchNo: 'AXB10851',
    mfgDate: 'JAN-2024',
    expDate: 'JAN-2026',
    mrp: 237.0,
    unitPerQty: 10,
    avlQty: 10,
  },
  {
    storedAt: 'S6/Rac6',
    batchNo: 'EXB10605',
    mfgDate: 'JAN-2024',
    expDate: 'JAN-2026',
    mrp: 201.0,
    unitPerQty: 10,
    avlQty: 150,
  },
  {
    storedAt: 'S6/Rac5',
    batchNo: 'BXB10882',
    mfgDate: 'JAN-2024',
    expDate: 'JAN-2026',
    mrp: 198.2,
    unitPerQty: 10,
    avlQty: 210,
  },
];

export default function MedicinePopup({ onClose, onAdd }) {
  const [quantities, setQuantities] = useState(medicines.map(() => 0));

  const handleQtyChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value) || 0;
    setQuantities(newQuantities);
  };

  const handleAdd = () => {
    const selected = medicines
      .map((med, index) => ({ ...med, qty: quantities[index] }))
      .filter(med => med.qty > 0);
    onAdd(selected);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-4xl relative overflow-x-auto">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="text-2xl font-bold mb-1">Augmentin 625 Duo Tablet</h2>
        <p className="mb-4 text-gray-600">Amoxycillin (500mg) + Clavulanic Acid (125mg)</p>

        <table className="w-full border-collapse text-sm">
          <thead className="bg-teal-600 text-white">
            <tr>
              <th className="p-2 text-left">Stored At</th>
              <th className="p-2 text-left">Batch No.</th>
              <th className="p-2 text-left">Mfg. Date</th>
              <th className="p-2 text-left">Exp. Date</th>
              <th className="p-2 text-left">MRP (₹)</th>
              <th className="p-2 text-left">Unit Per Qty.</th>
              <th className="p-2 text-left">Avl. Qty.</th>
              <th className="p-2 text-left">Qty.</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{med.storedAt}</td>
                <td className="p-2">{med.batchNo}</td>
                <td className="p-2">{med.mfgDate}</td>
                <td className="p-2">{med.expDate}</td>
                <td className="p-2">{med.mrp.toFixed(1)}</td>
                <td className="p-2">{med.unitPerQty}</td>
                <td className="p-2">{med.avlQty}</td>
                <td className="p-2">
                  <input
                    type="number"
                    min="0"
                    max={med.avlQty}
                    className="w-16 border rounded px-2 py-1"
                    value={quantities[index]}
                    onChange={(e) => handleQtyChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
            onClick={handleAdd}
          >
            +Add
          </button>
        </div>
      </div>
    </div>
  );
}
