import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Asie
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
