import React, { useState, useEffect } from 'react';

function NormasList({ onNormasLoaded }) { // Recebe a função como prop
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('http://127.0.0.1:5000/normas/api/normas')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => {
        onNormasLoaded(data); // Passa os dados para o componente pai
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [onNormasLoaded]); // Adiciona a função como dependência para evitar warnings

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Erro: {error}</div>;
  }

  return null; // Não renderiza nada diretamente
}

export default NormasList;