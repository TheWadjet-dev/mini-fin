export default function AuctionCard({ carro, onBidClick }) {
  return (
    <div className="border rounded p-4 m-2 shadow">
      <h3 className="text-lg font-bold">{carro.marca} {carro.modelo}</h3>
      <p>Año: {carro.año}</p>
      <p>Precio Inicial: ${carro.precioInicial}</p>
      <button onClick={() => onBidClick(carro)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Ver Detalles
      </button>
    </div>
  );
}
