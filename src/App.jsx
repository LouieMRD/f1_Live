import { useEffect } from "react";
import {getLaps} from "./services/openF1.js";

function App() {
    console.log("App rendered");

    useEffect(() => {
        async function loadLaps() {
            try{
                const data = await getLaps(9161);
                console.log(data);
            } catch (error) {
                console.log(error);
            }

        }
        loadLaps()
    }, []) //means this effect is ran when componenet first loads, rather than every render

    return (
        <main>
            <h1>F1 Live Timing</h1>
            <p>Testing the OpenF1 connection...</p>
        </main>
    );
}

export default App;