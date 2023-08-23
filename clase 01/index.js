import React from "react";
import { createRoot } from "react-dom/client"

function MiPrimerComponente(){
    return (
        <h2>Componente de react</h2>
    )
}

const root = createRoot(document.getElementById('root'))

root.render(<MiPrimerComponente/>)

