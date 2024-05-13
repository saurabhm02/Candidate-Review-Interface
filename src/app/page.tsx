import Assignment from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex pl-4 pt-10 gap-2"> 
        <Sidebar />
        <Assignment />
    </main>
  );
}
