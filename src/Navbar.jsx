import { useState } from "react";

import { AppBar, IconButton, Toolbar, TextField } from "@mui/material";
import { Search, Shuffle } from "@mui/icons-material";

function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" aria-label="random">
          <Shuffle />
        </IconButton>
        <TextField id="search-box" variant="filled" label="Search"></TextField>
        <IconButton size="large" aria-label="random">
          <Search />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
