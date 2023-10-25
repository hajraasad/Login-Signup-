import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    function xyz(data) {

        setData(data)

    }
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data, xyz];
};

export default useFetch;
