import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductForm from '../components/ProductForm';
import VerProducto from '../components/VerProducto';

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
    </div>
   
  );
};

export default Home;
