import { getHero } from "@/actions/home.action"
import HeroForm from "@/components/HeroForm"

async function HeroConfig() {
    
    const response = await getHero()

    return <div className="p-8 flex justify-center items-center flex-col">
        <HeroForm heroData={response?.slides} />
    </div>
}

export default HeroConfig