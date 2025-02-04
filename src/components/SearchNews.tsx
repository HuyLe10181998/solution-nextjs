"use client"
import { SearchIcon } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";



function SearchNews(){
    const router = useRouter();
    const [search, setSearch] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        router.push(`/news?search=${search}&page=1&limit=10`);
    }
    return     <form onSubmit={handleSubmit}>
    <input
      value={search}
      onChange={(e) => {

        if(!e.target.value){
            setSearch("");
            router.push(`/news`);
            return;
        };
        setSearch(e.target.value);

      }} 
      type="text" 
      placeholder="Keywords here..." 
    />
    <button type="submit" className="flex items-center justify-center">
      <SearchIcon />
    </button>
  </form>
}

export default SearchNews;