import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
const App = () => {
    const [ resource, setResource ] = useState("posts");

    const _onClick = val => {
        return () => setResource(() => val);
    };

    return (
        <div>
            <UserList />
            <div>
                <button onClick={_onClick("posts")}>Posts</button>
                <button onClick={_onClick("todos")}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};

export default App;
