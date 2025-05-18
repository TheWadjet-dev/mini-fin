'use client';
import React, { useEffect, useState } from 'react';
import AuctionCard from '@/components/AuctionCard';
import BidHistory from '@/components/BidHistory';
import { IDKitWidget } from '@worldcoin/idkit';
import { fetchCarros, fetchPujas, createPuja } from '@/lib/api';

export default function Auctions() {
  const [carros, setCarros] = useState([]);
  const [selectedCarro, setSelectedCarro] = useState(null);
  const [pujas, setPujas] = useState([]);

  useEffect(() => {
    fetchCarros().then(res => setCarros(res.data));
  }, []);

  const handleBid = (proof) => {
    if (!selectedCarro) return;
    createPuja({ carroId: selectedCarro._id, clienteId: '123', monto: selectedCarro.precioInicial + 100 })
      .then(() => fetchPujas(selectedCarro._id).then(r => setPujas(r.data)));
  };

  const viewDetails = (carro) => {
    setSelectedCarro(carro);
    fetchPujas(carro._id).then(r => setPujas(r.data));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Subastas</h2>
      {carros.map((carro) => (
        <AuctionCard key={carro._id} carro={carro} onBidClick={viewDetails} />
      ))}

      {selectedCarro && (
        <div>
          <h3 className="text-lg font-bold mt-4">Realizar Puja</h3>
          <IDKitWidget
            app_id={process.env.NEXT_PUBLIC_WORLD_APP_ID}
            action={`puja-${selectedCarro._id}`}
            onSuccess={handleBid}
          >
            {({ open }) => (
              <button onClick={open} className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
                Verificar con World ID y Confirmar Puja
              </button>
            )}
          </IDKitWidget>
          <BidHistory history={pujas} />
        </div>
      )}
    </div>
  );
}
