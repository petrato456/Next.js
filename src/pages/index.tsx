import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import { GetServerSideProps } from 'next'
import { stripe } from '../Services/stripe';

 interface HomeProps{
   product:{
     priceId: string;
     amount: number;
   }
 }

export default function Home({product}: HomeProps) {
  console.log(product);
  return (
    <>
    <Head>
      <title> Home | ignews</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acess to all the publications<br/>
          <span>for {product.amount} month</span>
        </p>      
      </section>
    
   <SubscribeButton priceId={product.priceId}/>
   </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>{
  const price = await stripe.prices.retrieve('price_1JblgFKuScQf7hZVomNUr7Ia',{
    expand: ['product']
})

 const product ={
   priceId: price.id,
   amount: new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
   }).format(price.unit_amount / 100),
 };
  
  return{
    props: {
      product,
    }
    
  }
}