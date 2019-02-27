import React from "react";
import useResources from "./useResources";

const UserList = () => {
    const resources = useResources("users");
    return (
        <ul>
            {resources.map(record =>
                <li key={record.id}>{record.name}</li>
            )}
        </ul>
    );
};

export default UserList;
