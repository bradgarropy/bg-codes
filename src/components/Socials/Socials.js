import SocialLink from "components/SocialLink"

const Socials = () => {
    return (
        <div className="grid grid-cols-[auto,auto] gap-x-[2.8rem] justify-start items-center">
            <div className="grid grid-cols-[auto,auto,auto,auto] justify-start items-center gap-x-[1.4rem]">
                <SocialLink platform="instagram" />
                <SocialLink platform="twitter" />
                <SocialLink platform="youtube" />
                <SocialLink platform="github" />
            </div>

            <span className="text-[3.2rem]">@bradgarropy</span>
        </div>
    )
}

export default Socials
