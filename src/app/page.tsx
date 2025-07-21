import Link from "next/link";
export default function Home() {
  return (
    
   <div className="bg-[url('/images/home-img.jpg')] bg-cover bg-center bg-black">
      <main className="flex flex-col justify-center text-center
      max-w-5xl mx-auto h-dvh">
          <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90
          w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
              <h1 className="text-4xl font-bold">
                Hassani&apos;s Computer <br /> Repair Shop</h1>
              <address>
                Skanes 5000 Monastir,
                Rue Mosquee Sayadi  
              </address>
               <p>Open Daily : 8am to 6pm</p>
               <Link href="tel:93558776" className="hover:underline">
                93-558-776
               </Link>
          </div>
      </main>

   </div>

  );
}
