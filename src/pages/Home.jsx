import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col 
      justify-center pb-16 md:flex-row md:items-center md:justify-between ">
      <div className="h-1/3 md:h-auto md:flex-1">
        <img className="h-[100%]  " src="images/glass-of-wine.png" alt="glass-wine" />
      </div>

      <div className="p-4 mt-4 md:flex-1">
        <h2 className="md:text-6xl font-black lg:text-8xl text-4xl ">Vino Rojo</h2>
        <p className="font-black">-- Oscuro, Dulce Sabor</p>
        <p className="font-medium text-xl mt-4 mb-8">
        &quot; Si bebemos vino, encontramos que los sueños vienen hacia nosotros desde la inminente noche. &quot;
        -D.H. Lawrence
        </p>
        <button onClick={()=> navigate("/shop")} className="border-2 border-current font-black pt-1 pb-1 pl-6 pr-6 roundend-sm">Cómpralo Ahora</button>
      </div>
    </div>
  );
}

export default Home;