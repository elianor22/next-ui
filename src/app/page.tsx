import ExampleNavbar from "@/components/molecules/ExampleNavbar"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import styles from "./page.module.css"
import Image from "next/image"
import Pokemon from "@/assets/R.png"

export default function Home() {
  return (
    <main className={styles.main}>
      <ExampleNavbar />

      <section className={styles.hero}>
        <Container>
          <Box pt={5}>
            <Grid container spacing="1rem">
              <Grid item md={6} lg={6}>
                <Box
                  // className={styles.blurry}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={"100%"}
                  p="1rem"
                >
                  <Box>
                    <Box>
                      <Typography
                        className={styles.text}
                        fontWeight={700}
                        fontSize="3rem"
                      >
                        Labore commodo sit consectetur in Lorem.
                      </Typography>
                    </Box>
                    <Typography
                      className={styles.text}
                      fontSize="14px"
                      sx={{
                        mt: 2,
                      }}
                    >
                      Id magna ea quis aliquip nostrud culpa ullamco velit
                      incididunt.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: "1.4rem",
                        borderRadius: "100px",
                        fontSize: "1.5rem",
                        p: "1rem 2rem",
                      }}
                    >
                      Jump now!
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} xs={12} md={6} lg={6}>
                <Box position="relative" width="100%">
                  <Box position="absolute" top={0} width="100%" height={700}>
                    {" "}
                    <Image
                      src={Pokemon.src}
                      alt="Pokemon"
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section>
        <footer className={styles.footer}>
          <Box className="footer-content">
            <Typography color="white" fontSize="2rem">
             New Gen.
            </Typography>
            <Typography
              className={styles.text}
              sx={{
                mt: "1rem",
              }}
            >
              Velit dolor ullamco et commodo nisi velit. Incididunt anim
              consectetur laborum eu mollit
            </Typography>
          </Box>
        </footer>
      </section>
    </main>
  )
}
