import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-4xl h-[60vh] items-center flex justify-center text-purple-600 font-bold">
          this is home page bruh!
        </h1>
        <div>
          <About/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
