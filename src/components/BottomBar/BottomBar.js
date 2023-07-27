import Socials from "components/Socials"

const BottomBar = () => {
    return (
        <div className="content-center justify-between grid-flow-col absolute bottom-0 w-full h-24 py-0 px-[2.8rem] bg-white shadow grid ">
            <Socials />
            {/* <span className="text-[3.2rem]">!extralife</span> */}
        </div>
    )
}

export default BottomBar
