
import { useState } from "react";

export const useCounter = (initialValue = 15) => {

    const [ counter, setCounter ] = useState(initialValue);

    return {

        counter

    }

}
