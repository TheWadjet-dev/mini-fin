'use client';
import React, { useEffect, useState } from 'react';
import {AuctionCard} from '@/components/AuctionCard';
import { fetchCarros } from '@/lib/api';

export default function Home() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetchCarros().then((res: { data: React.SetStateAction<never[]>; }) => setCarros(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mejores Subastas</h2>
      {carros.map((c) => <AuctionCard key={c._id} carro={c} onBidClick={() => {}} />)}
    </div>
  );
}
