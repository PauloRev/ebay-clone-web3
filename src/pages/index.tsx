import Head from 'next/head';
import Header from '../components/Header';
import { useActiveListings, useContract } from '@thirdweb-dev/react';
import CardItem from '../components/CardItem';

export default function Home() {

  const { contract } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT, 'marketplace');

  const { data: listings, isLoading: loadingListings } = useActiveListings(contract);

  return (
    <>
      <Head>
        <title>ebay Clone | Web3</title>
      </Head>

      <Header />

      <main className='max-w-6xl mx-auto py-2 px-6 mb-5'>
        {
          loadingListings ?
            <p className='text-center animate-pulse text-blue-500'>Loading listings...</p>
            :
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto'>
              {
                listings?.map(listing => (
                  <CardItem listing={listing} key={listing.id} />
                ))
              }
            </div>
        }
      </main>
    </>
  );
}
