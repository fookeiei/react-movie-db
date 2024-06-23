import { useRef } from "react";

import SearchButton from "../../baseUI/Button/SearchButton";
import SearchInput from "../../baseUI/Input/SearchInput";

const Banner = () => {
    const SearchInputRef = useRef();

    const handleSearch =() =>{
        alert(`You typed ${SearchInputRef.current.value}`)
    }

    const handleKeyDown = (event) => {
        if(event.key==='Enter'){
            handleSearch();
        }
    }


    return <div className="h-[300px] bg-banner bg-cover py-5 ">
        <div className="flex flex-col gap-10 px-10 py-10">
            <div className="text-white">
                <h2 className="font-extrabold text-5xl">Welcome.</h2>
                <h3 className="font-semibold text-[2rem] leading-1">Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <div className="relative">
                <SearchInput ref={SearchInputRef} onKeyDown={handleKeyDown} />
                <div className="absolute top-0 right-0">
                    <SearchButton onClick={handleSearch} />
                </div>                
            </div>
        </div>
    </div>
}

export default Banner;