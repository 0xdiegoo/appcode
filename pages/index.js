import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductForm from '../components/ProductForm';
import VerProducto from '../components/VerProducto';
import Html5QrcodePlugin from '../components/reader1';

const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  return (
    <div>
      <div>
      <h1>Agregar Producto</h1>
      <ProductForm />
      </div>
      <div>
      <h1>Consultar producto</h1>
      <VerProducto/>
      </div>
      <div> <h1>QR Code Scanner</h1> <Html5QrcodePlugin fps={10} qrbox={250} qrCodeSuccessCallback={(result) => alert(result)} /> </div>
    </div>
   
  );
};

export default Home;
