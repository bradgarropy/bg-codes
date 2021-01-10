import {useLocation} from "@reach/router"

const useGuest = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const guest = params.get("guest")

    return guest
}

export default useGuest
