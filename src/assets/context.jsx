import { createContext } from "react";

import data from "./music.json";

const dataContext = createContext(data);

export default dataContext;