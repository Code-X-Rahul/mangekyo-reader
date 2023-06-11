import Link from "next/link"
import logo from '../../public/logo.png'
import Image from "next/image"

const Header = () => {
    return (
        <header className="flex justify-between my-4 ">
            <div className="flex ">
                <Link href="/">
                    <Image src={logo} alt="logo" className="w-20 mx-4" />
                </Link>
                <div className="flex justify-between">
                    <ul className="flex justify-center items-center">
                        <Link href="/">
                            <li className="list-none mx-4 text-teal-400">HOME</li>
                        </Link>
                        <Link href="/">
                            <li className="list-none mx-4 text-teal-400">CONTACT US</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="">
                <button className="">
                    {/* <img src="" alt="" className="" /> */}
                </button>
            </div>
        </header>
    )
}

export default Header