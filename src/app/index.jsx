import './style/index.scss';
import { withProviders } from "./providers";
import {Routing} from "../pages/index.jsx";
function App() {

    return (
        <>
            <Routing />
        </>
    )
}

export default withProviders(App)
