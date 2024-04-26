import Navbar from "@/components/Navbar";
import Head from 'next/head';
import Link from 'next/link';
import '/app/globals.css'
import Map from "@/components/Map";
import TechWindow from "@/components/TechWindow";
import { useState } from "react";


const HomePage = () => {
  const [clickedTechnology, setClickedTechnology] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const handleTechnologyClick = (technology) => {
    setClickedTechnology(technology);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const data = {
    name: 'root',
    children: [{name:"Generative AI Technologies", children: [
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },
      {
        name: 'Text',
        children: [
          {
            name: 'Developer Tools',
            children: [
              { name: 'License', children: [
                {name: 'ChatGPT', value: 1},
                {name: 'Interax AI', value: 1}] },
              { name: 'Open Source', children: [
                {name: 'Databricks', value: 1},
                {name: 'ColossalAI', value: 1},
                {name: 'LlamaIndex', value: 1},
                {name: 'LangChain', value: 1},
              ] }
            ]
          },
          {
            name: 'MKT - Content Creation',
            children: [
              { name: 'License', children: [
                {name: 'Copy AI', value: 1}, 
                {name: 'LLaMA', value: 1}, 
                {name: 'Twig', value: 1}, 
                {name: 'Cowriter AI', value: 1}, 
                {name: 'Decktopus AI', value: 1},
                {name: 'Wordtune', value: 1},
                {name: 'WriteSonic', value: 1},
                {name: 'Typli AI', value: 1},
                {name: 'WebCopilot', value: 1},
                {name: 'HiveMind AI', value: 1},
                {name: 'Jasper', value: 1}
              ]},
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'People Ops - Performance Management',
            children: [
              { name: 'License', children: [{name: 'Fireflies', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          {
            name: 'General Purpose',
            children: [
              { name: 'License', children: [{name: 'Notion AI', value: 1},{name: 'Rationale', value: 1}] },
              { name: 'Open Source', children: [{name: 'N/A', value: 1}] }
            ]
          },
          // Other primary enterprise categories for Text content type...
        ]
      },

    
    ]}
    ]
  };
  

  return (
    <div className="bg-black">
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to our website!" />
      </Head>
      <Navbar/>
      <main className="flex flex-col items-center">
        <header className="mb-8">
          <h1 className="text-6xl pt-14">DISCOVER GENERATIVE AI</h1>
        </header>
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search by technology, project name, popularity, and more..."
            className="p-2 rounded-full border-2 border-red-500 outline-none bg-black text-white w-full"
          />
        </div>
        
        <div className="p-8">
          <Map onTechnologyClick={handleTechnologyClick} data={data}/>
          {popupOpen && <TechWindow technology={clickedTechnology} onClose={handlePopupClose}/>}
        </div>
      </main>

    </div>
  );
};

export default HomePage;
