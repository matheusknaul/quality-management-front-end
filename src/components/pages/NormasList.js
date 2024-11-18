import React, { useState, useEffect } from 'react';

function NormasList() {
  const [normas, setNormas] = useState([]);
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
        setNormas(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Erro: {error}</div>;
  }

  return (
    <div>
      <ul>
        {normas.map((norma) => (
          <li key={norma.id}>
            <strong>ID:{norma.id} | {norma.codigo}</strong> ({norma.ano}) - {norma.descricao}
            <br />
            <em>{norma.situacao}</em> | Verificação: {new Date(norma.data_verificacao).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NormasList;