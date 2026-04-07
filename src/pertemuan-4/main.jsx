import { createRoot } from "react-dom/client";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import './tailwind.css';
import ResponsiveGrid from "./ResponsiveGrid";


createRoot(document.getElementById("root"))
    .render(
        <div>           
            {/* <FrameworkListSearchFilter/>            */}
            <ResponsiveGrid/>
        </div>
    )

