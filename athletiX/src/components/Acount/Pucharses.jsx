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
      <h2 className="text-3xl">Tus compras:</h2>
      {compras?.map((compra, index) => (
       <div key={index} className="flex items-center mx-2 py-2">
       <img src={compra.foto} alt="" className="h-20 rounded-full" />
       <div className="ml-4">
         <h3 className="text-sm">{compra.nombre}</h3>
         <p className="text-sm">{compra.precio}</p>
         {/* <p className="text-sm">
           {compra.fecha
             ? timeStampToDate(compra.fecha)
             : "Fecha no disponible"}
         </p> */}
       </div>
     </div>
      ))}
      {!compras && <h2>Acá se ven tus compras una vez las hagas</h2>}
    </>
  );
};

export default Pucharses;
