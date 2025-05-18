export default function BidHistory({ history }) {
  return (
    <div className="mt-4">
      <h4 className="font-bold">Historial de Pujas</h4>
      <ul>
        {history.map((entry, idx) => (
          <li key={idx}>Cliente {entry.clienteId} ofertó ${entry.monto}</li>
        ))}
      </ul>
    </div>
  );
}
