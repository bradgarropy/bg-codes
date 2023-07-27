import Link from "@bradgarropy/gatsby-link"

const Navigation = () => {
    return (
        <nav
            className="absolute top-0 left-0 grid grid-flow-col gap-x-10 py-20 px-40 transition-transform ease-out duration-100 -translate-y-40 hover:translate-y-0"
            role="navigation"
        >
            <Link
                className="text-[4rem] no-underline text-black hover:underline"
                to="/brb"
            >
                brb
            </Link>
            <Link
                className="text-[4rem] no-underline text-black hover:underline"
                to="/countdown"
            >
                countdown
            </Link>
            <Link
                className="text-[4rem] no-underline text-black hover:underline"
                to="/talking"
            >
                talking
            </Link>
            <Link
                className="text-[4rem] no-underline text-black hover:underline"
                to="/sharing"
            >
                sharing
            </Link>
            <Link
                className="text-[4rem] no-underline text-black hover:underline"
                to="/coding"
            >
                coding
            </Link>
        </nav>
    )
}

export default Navigation
