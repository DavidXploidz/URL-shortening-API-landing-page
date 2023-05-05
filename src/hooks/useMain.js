import { useContext } from "react";

import MainContext from "../context/MainProvider";

const useMain = () => {
    return useContext(MainContext);
}

export default useMain;