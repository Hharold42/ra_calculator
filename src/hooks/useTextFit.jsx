import { useState } from "react"


const useTextFit = ({initial = 5}) => {
    const [size, setSize] = useState(initial);

    const handleResize = (op) => {
        op === "d" ? () => setSize(current => current - 0.5) : "null"
    }
}