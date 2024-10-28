import { useState } from "react";

export default function DatosURL(){
    
    const [URL_COMPLEMENT, SET_URL_COMPLEMENT] = useState<string>();
    SET_URL_COMPLEMENT('datos/getDatos')

    const [API_VERION, SET_API_VERION] = useState<string>();
    SET_API_VERION('v1')

    return {
        URL_COMPLEMENT,
        API_VERION
    } 
}
