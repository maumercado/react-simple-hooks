import { useEffect, useState } from "react";
import axios from "axios";
const useResources = resource => {
    const [ resources, setResources ] = useState([]);

    useEffect(() => {
        fetchResource(resource);
    }, [ resource ]);

    const fetchResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    };

    return resources;
};

export default useResources;
