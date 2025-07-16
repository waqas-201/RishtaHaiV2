import Image from "next/image"
import Link from "next/link"


const Logo = () => {
    return (
        < Link href="/" className="flex items-center space-x-2" >
            <Image
                src="https://r6lo7i3owc.ufs.sh/f/Q3K0qACgFHuv6HHizzZNfXIJREunt7slvFd9Zi1DUAqWoLe5"
                alt="RishtaHai Logo"
                width={120}
                height={50}

            />
        </Link >

    )
}

export default Logo