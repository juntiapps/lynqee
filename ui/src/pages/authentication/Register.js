import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Card,
  Typography,
  Stack,
  Alert,
  Collapse,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import Logo from "../../layouts/full/shared/logo/Logo";
import AuthRegister from "./auth/AuthRegister";

const Register2 = () => {
  const location = useLocation();
  const [showFailed, setShowFailed] = useState(false);

  useEffect(() => {
    if (location.state?.failed) {
      setShowFailed(true);
      setTimeout(() => {
        setShowFailed(false);
      }, 5000);
    }
  }, [location.state]);
  return (
    <PageContainer title="Register" description="this is Register page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            size={{ xs: 12, sm: 12, lg: 4, xl: 3 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Collapse in={showFailed}>
                <Alert severity="error" onClose={() => setShowFailed(false)}>
                  {location.state?.message}
                </Alert>
              </Collapse>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthRegister
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Register
                  </Typography>
                }
                subtitle={
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    mt={3}
                  >
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      fontWeight="400"
                    >
                      Already have an Account?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/login"
                      variant="h6"
                      fontWeight="500"
                      sx={{
                        textDecoration: "none",
                        color: "primary.main",
                      }}
                    >
                      Sign In
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Register2;
