import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material"

const menu: Array<string> = ["My Project", "About", "Contact"]

const ExampleNavbar = () => {
  return (
    <nav>
      <Box
        width="100%"
        px="1rem"
        py="8px"
        sx={{
          boxShadow: "0px -3px 12px #cdcaca",
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box maxWidth="150px">
            <Typography>My Logo Is Perfect!.</Typography>
          </Box>
          <Box display="flex">
            <List
              sx={{
                display: "flex",
                py: 0,
              }}
            >
              {menu.map((item: string) => (
                <ListItem
                  key={item}
                  sx={{
                    padding: "0px",
                  }}
                >
                  <ListItemButton sx={{ width: "100%" }}>
                    <ListItemText sx={{ width: "max-content" }}>
                      {item}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: "100px",
                fontWeight: 700,
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </nav>
  )
}

export default ExampleNavbar
