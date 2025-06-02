import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to="/" className="flex flex-col leading-none hover:text-accent transition-colors group">
            <div className="text-sm md:text-base lg:text-lg font-medium text-text-secondary group-hover:text-accent transition-colors">
                Viktoriia
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                Semenchuk
            </div>
        </Link>
    )
}

export default Logo