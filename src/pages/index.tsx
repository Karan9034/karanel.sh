import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className="sm:px-0 min-h-screen h-full">
            <div className="flex-1 flex flex-col overflow-hidden min-h-screen">
                <NavBar />
                <div className="flex-1 lg:grid lg:grid-cols-8 grid-cols-3 flex flex-col">
                    <SideBar />
                    <Main />
                </div>
            </div>
        </div>
    );
}
