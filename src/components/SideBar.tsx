import About from "./About";
import Contact from "./Contact";
import FunFacts from "./FunFacts";

const SideBar = () => {
    return (
        <div className="w-full h-full flex flex-col col-span-2 md:col-span-3 lg:col-span-2 gap-6 bg-gray-25 border-r-[1px] border-gray-200 shadow-sm shadow-brand-900/5 z-30 overflow-visible">
            <About />
            <FunFacts />
            <Contact />
        </div>
    );
};

export default SideBar;
