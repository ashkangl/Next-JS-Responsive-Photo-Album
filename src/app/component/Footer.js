import Link from "next/link"

const Footer = () => {
    return(
        <Link href='http://ashkangolzad.ir' className="pt-8">
        <div className="w-full text-center font-bold hover:text-rose-800">Published by AG</div>
        </Link>
    )
}

export default Footer;