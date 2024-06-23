import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import { images } from '../components/data'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <CarouselSlider images={images} />
    </main>
  );
}
