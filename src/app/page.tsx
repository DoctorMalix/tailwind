import Image from 'next/image'

export default function Home() {
  return (
    <div>

        <div className=" bg-gray-200 mt-20">
         <p>This is a first line</p>
         <button className="border-2 border-gray-500 rounded-1g p-1 hover: scale-105 hover:border-blue-500">Button</button>
         <p>This is a last line</p>
       </div>




    <div>

      <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-9xl font-extrabold">
      <span className="bg-gradient-to-r from-orange-400 via-red-500 via-pink-500 to-purple-600 
            bg-clip-text text-transparent text-clip text- ">  PAKISTAN, A COLORFUL COUNRTY
      </span>
      </h1>


      </div>
       <div className="bg-gradient-to-l from-orange-400 via-red-500 via-blue-300 to-purple-600 ">
         <p>This is a first line</p>
         <button className="bg-red-200 p-3 m-5 hover:bg-blue-500">Button</button>
         <p>This is a last line</p>
       </div>

/////////////////////
       <div className=" bg-gray-200 mt-20">
         <p>This is a first line</p>
         <button className="border-2 border-gray-500 rounded-xl rounded-1g p-1 hover: scale-105 hover: border-blue-500">Button</button>
         <p>This is a last line</p>
       </div>

       // className="border-2 border-gray-500 rounded-1g p-1 hover: scale-105 hover: border-blue-500
 
 
 <div className="mt-10">
   <button className=" border border-black p-7">one</button>
 
   <button className=" border border-black mx-10">two</button>
 
   <button className=" border border-black border-4 p-2">three</button>
 
 </div>
     <div className="my-10 mx-2">
   <button className=" border border-black border-4 p-3 rounded-xl">four</button>
   <button className=" border border-black border-4 p-3 rounded-full mx-4">five</button>
 
     </div>
 
     <div className="my-10 mx-2">
   <button className=" border p-5 bg-white shadow-md">card 1</button>
   <button className=" border  p-5 mx-4 bg-white shadow-lg">card 2</button>
   <button className=" border p-5  mx-4 bg-black shadow-3xl">card 333333333333333</button>
   <button className=" border  p-5 mx- bg-white shadow-inner">card 4</button>
 
     </div>
 
 <div className="m-10 flex space-x-10">
       <button className="p-5 font-bold bg-red-300">card 1</button>
       <button className="p-5 font-bold bg-green-300">card 2</button>
       <button className="p-5 font-bold bg-gray-300">card 3</button>
       <button className="p-5 font-bold bg-blue-300">card 4</button>
     </div>
 
     <div className="m-10 flex  flex-col space-y-10">
       <button className="p-5 font-bold bg-red-300">card 1</button>
       <button className="p-5 font-bold bg-green-300">card 2</button>
       <button className="p-5 font-bold bg-gray-300">card 3</button>
       <button className="p-5 font-bold bg-blue-300">card 4</button>
     </div>
    </div>
 
 
 
 
 <div className="m-10 flex space-x-2 justify-center ">
       <button className="p-5 font-bold bg-red-300">card 1</button>
       <button className="p-5 font-bold bg-green-300">card 2</button>
       <button className="p-5 font-bold bg-gray-300">card 3</button>
       <button className="p-5 font-bold bg-blue-300">card 4</button>
     </div>
     
     <div className="flex space-x-2 justify-between">
       <button className="p-5 font-bold bg-red-300">card 1</button>
       <button className="p-5 font-bold bg-green-300">card 2</button>
       <button className="p-5 font-bold bg-gray-300">card 3</button>
       <button className="p-5 font-bold bg-blue-300">card 4</button>
     </div>
 
 <div className="flex space-x-2 justify-around my-4 p-10 flex-wrap">
       <button className="p-5 font-bold bg-red-300">card 1</button>
       <button className="p-5 font-bold bg-green-300">card 2</button>
       <button className="p-5 font-bold bg-gray-300">card 3</button>
       <button className="p-5 font-bold bg-blue-300">card 4</button>
     </div>
 
 
  <div className="flex space-x-2 justify-evenly">
       <button className="p-5 font-bold bg-red-300">card 1</button>
       <button className="p-5 font-bold bg-green-300">card 2</button>
       <button className="p-5 font-bold bg-gray-300">card 3</button>
       <button className="p-5 font-bold bg-blue-300">card 4</button>
     </div>
 
     <Image src={"/panaverse.png"} alt={""} width={80} height={80}/> 
     </div>
  )
}
