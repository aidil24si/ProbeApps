import { createRoot } from "react-dom/client";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import './tailwind.css';


createRoot(document.getElementById("root"))
    .render(
        <div>           
            <FrameworkListSearchFilter/>           
        </div>
    )

