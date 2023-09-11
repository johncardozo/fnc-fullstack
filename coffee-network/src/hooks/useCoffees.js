import { useEffect, useState } from "react";

const useCoffees = () => {
  const [coffees, setCoffees] = useState(null);

  // Código ejecutado al montar el componente
  useEffect(() => {
    const fetchCoffees = async () => {
      const url = "https://64f8eadd824680fd21803236.mockapi.io/coffees";

      try {
        const response = await fetch(url);
        const json = await response.json();
        setCoffees(json);
      } catch (error) {
        console.error(error);
      }
    };

    // Invoca la función para obtener los cafés del backend
    fetchCoffees();
  }, []);

  // Retorna los datos del hook
  return { coffees };
};

export default useCoffees;
