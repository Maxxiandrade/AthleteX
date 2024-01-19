import { useSelector } from "react-redux";

const Adress = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const { entrega } = userInfo;
  return (
    <>
      {entrega ? (
        <>
          <h2>Datos de entrega:</h2>
          {entrega && (
            <>
              <p>{entrega?.Ciudad}</p>
              <p>{entrega?.Provincia}</p>
              <p>{entrega.Direccion}</p>
            </>
          )}
        </>
      ) : (
        <h1 className="underline cursor-pointer">
          Configura tus datos para los envíos
        </h1>
      )}
    </>
  );
};

export default Adress;
