import Navbar from "@/components/Navbar";
import Head from 'next/head';
import Link from 'next/link';
import '/app/globals.css'


const HomePage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our website!" />
      </Head>
      <Navbar/>
      <main className="flex flex-col items-center">
        <header className="mb-8">
          <h1 className="text-6xl pt-14">About our Project</h1>
        </header>
        <div className="flex flex-col justify-center items-center px-24">
            <p className="text-gray-400 mb-8 text-center">
                Welcome to our Generative AI Map project! We're dedicated to exploring the world of generative artificial intelligence (AI) through an interactive platform. Discover different AI algorithms, models, and applications in a visually engaging map. Join us as we unlock the creative potential of AI and shape the future together.
            </p>
            <img src="/aboutGraphic.png" className="h-full object-contain pl-6"/>
            </div>
      </main>

    </div>
  );
};

export default HomePage;
