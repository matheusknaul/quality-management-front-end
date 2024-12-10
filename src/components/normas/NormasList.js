import React, { useState, useEffect } from 'react';

function NormasList({ onNormasLoaded }) {
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
        onNormasLoaded(data);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [onNormasLoaded]);
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Erro: {error}</div>;
  }

  return null;
}

export default NormasList;