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
          <h1 className="text-6xl pt-14">ABOUT</h1>
        </header>
      </main>

    </div>
  );
};

export default HomePage;
