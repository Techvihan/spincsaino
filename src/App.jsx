import React from "react";

function App() {
  return (
    <div>
      <div>
        <img className="absolute object-cover h-screen w-screen opacity-50" src="./spin.jpg" />
      </div>
      <div className="flex justify-center items-center relative pt-32">
        <div className="bg-gray-400 border-4 rounded-3xl z-10 border-black p-8">
                    <h1 className="text-center text-4xl mt-8">Are You Over 18+</h1>
                 <p className="text-2xl mt-8 text-center">This Website requires you to be <br/>18+ years or older to enter.</p>
          <div className="mt-8 flex justify-around">
            <a href="https://www.spincasino.com/?s=bfp28916&a=bfpadid163608" className="text-white text-xl hover:bg-green-700 bg-blue-800 rounded-xl p-2">Yes, I am 18+</a>
            <a href="https://www.spincasino.com/?s=bfp28916&a=bfpadid163608" className="text-white text-xl hover:bg-green-700 bg-blue-800 rounded-xl py-2 px-4">Skip</a>
        </div>
          
        </div>
              
      </div>
    </div>

      
  );
}

export default App;
