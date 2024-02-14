import ExampleNavbar from "@/components/molecules/ExampleNavbar"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import Banner from "@/assets/hero.png"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <ExampleNavbar />

      <section>
        <Container>
          <Box pt={5}>
            <Grid container spacing="1rem">
              <Grid item md={6} lg={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={"100%"}
                >
                  <Box>
                    <Box>
                      <Typography fontWeight={700} fontSize="3rem">
                        Labore commodo sit consectetur in Lorem.
                      </Typography>
                    </Box>
                    <Typography fontSize="14px">
                      Id magna ea quis aliquip nostrud culpa ullamco velit
                      incididunt.
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        mt: "1rem",
                        borderRadius: "100px",
                      }}
                    >
                      Jump now!
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6} lg={6}>
                <Link href="https://www.freepik.com/free-vector/boy-studying-with-laptop-illustration_88805085.htm#query=computer&position=32&from_view=search&track=sph&uuid=18078045-b568-4005-8d94-d74e2b2574b2">
                  <Box>
                    <Image
                      src={Banner}
                      alt="Image by djvstock"
                      objectFit="cover"
                      loading="lazy"
                      quality={70}
                      height={500}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </main>
  )
}
