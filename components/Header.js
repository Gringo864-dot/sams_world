import Image from "next/image";

function Header() {
    return (
        <div>
            <h1>Gringo's World</h1>

            <div>
                <Image 
                    src="/Images/S_logo.jpg"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
        </div>
    )
}

export default Header
