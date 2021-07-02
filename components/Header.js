import Image from "next/image";

function Header() {
    return (
        <div>
            <h1>Gringo's World</h1>

            <div>
                <Image 
                    src="https://cdn5.vectorstock.com/i/1000x1000/48/44/water-letter-s-logo-icon-design-vector-22794844.jpg"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
        </div>
    )
}

export default Header
