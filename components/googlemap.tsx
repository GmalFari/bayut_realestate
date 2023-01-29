import { Wrapper, Status } from "@googlemaps/react-wrapper";

import SearchFilter from './SearchFilter'

const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  
  <Wrapper apiKey={"6cb10cae22mshe83ac21e4eb1de3p1897c1jsn0b3893d5488f"} render={render}>
    <SearchFilter />
  </Wrapper>