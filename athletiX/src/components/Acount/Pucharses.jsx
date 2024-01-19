import { useSelector } from "react-redux";

const Pucharses = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const { compras } = userInfo;

  function timeStampToDate(timestampObject) {
    const milliseconds =
      timestampObject.seconds * 1000 +
      Math.round(timestampObject.nanoseconds / 1e6);
    const fecha = new Date(milliseconds);
    return fecha.toLocaleDateString(); // o cualquier formato que desees
  }
  return (
    <>
      <h2 className="text-lg">Tus compras:</h2>
      {compras?.map((compra, index) => (
        <div key={index}>
          <h3 className="text-sm">{compra.articulo}</h3>
          <p className="text-sm">{compra.precio}</p>
          <p className="text-sm">
            {compra.fecha
              ? timeStampToDate(compra.fecha)
              : "Fecha no disponible"}
          </p>
        </div>
      ))}
      {!compras && <h2>Acá se ven tus compras una vez las hagas</h2>}
    </>
  );
};

export default Pucharses;
