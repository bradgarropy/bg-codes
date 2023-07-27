import {useStream} from "hooks"
import {useEffect, useState} from "react"

const Admin = () => {
    const streamCtx = useStream()
    const [isLoading, setIsLoading] = useState(false)
    const [stream, setStream] = useState(streamCtx.stream)

    useEffect(() => {
        if (streamCtx.stream) {
            setStream(streamCtx.stream)
        }
    }, [streamCtx])

    const onChange = event => {
        const newStream = Object.assign({}, stream)
        newStream[event.target.name] = event.target.value
        setStream(newStream)
    }

    const onSubmit = async event => {
        event.preventDefault()

        setIsLoading(true)
        await streamCtx.updateStream(streamCtx.stream.id, stream)
        setIsLoading(false)
    }

    return (
        <form
            onSubmit={onSubmit}
            className="w-full h-full grid justify-center content-center gap-y-12 text-5xl"
        >
            <div className="grid gap-y-4">
                <label
                    className="text-white drop-shadow-[2px_2px_0px_black]"
                    htmlFor="title"
                >
                    title
                </label>

                <input
                    className="py-4 px-8 border-2 border-black"
                    type="text"
                    name="title"
                    id="title"
                    value={stream?.title ?? ""}
                    onChange={onChange}
                />
            </div>
            <div className="grid gap-y-4">
                <label
                    className="text-white drop-shadow-[2px_2px_0px_black]"
                    htmlFor="guest"
                >
                    guest
                </label>

                <input
                    className="py-4 px-8 border-2 border-black"
                    type="text"
                    name="guest"
                    id="guest"
                    value={stream?.guest ?? ""}
                    onChange={onChange}
                />
            </div>

            <button className="p-4 bg-white border-4 border-black mt-20 cursor-pointer">
                {isLoading ? "saving..." : "save"}
            </button>
        </form>
    )
}

export default Admin
