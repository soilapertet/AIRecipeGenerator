import robotIcon from "../assets/images/chef-claude-icon.png" // save image file under robotoIcon variable

const Header = () => {
    return (
        <header className="bg-header w-full h-30">
            <div className="flex flex-row justify-center items-center gap-4 p-4">
                <img src={robotIcon} alt="Icon of a robot with a chef hat" className="w-14"/>
                <h1 className="text-4xl text-font-color font-bold">Chef Claude</h1>
            </div>
        </header>
    )
}

export default Header;