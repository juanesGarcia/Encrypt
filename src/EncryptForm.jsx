import React, { useState } from 'react';
import CryptoJS from 'crypto-js'; // Importamos la librería
import './App.css';
// Función para encriptar el texto usando SHA-256
const encryptText = (text) => {
  return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
};

const EncryptForm = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = encryptText(inputText);
    setEncryptedText(result);
  };

  return (
    <div>
      <div className='title'>
          <h1>Encriptador de Texto</h1>
      </div>
    
      <div className='containerEncrypt'>
         
      <form onSubmit={handleSubmit} >
        <label>
          Ingresa una palabra:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <button type="submit">Encriptar</button>
      </form>
      </div>
     
      {encryptedText && (
        <div className='result'>
          <div className='textoen'>
             <h2>Texto Encriptado (SHA-256):</h2>
          <p>{encryptedText}</p>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default EncryptForm;
