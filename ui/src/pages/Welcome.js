import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  Typography,
  Alert,
  Collapse,
  Button,
} from "@mui/material";

// components
import PageContainer from "../components/container/PageContainer";
import Logo2 from "../layouts/full/shared/logo/Logo2";

const Welcome = () => {
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.registered) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [location.state]);

  return (
    <PageContainer
      title="Lynqee - Link Management App"
      description="Lynqee - Link Management App"
    >
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
              <Collapse in={showSuccess}>
                <Alert severity="success" onClose={() => showSuccess(false)}>
                  {location.state?.message}
                </Alert>
              </Collapse>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography fontWeight="700" variant="h3">
                  WELCOME TO
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo2 />
              </Box>
              <Typography
                variant="subtitle1"
                textAlign="center"
                color="textSecondary"
                mb={1}
              >
                Link Manager
              </Typography>

              <Box my="25px">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/register"
                  // type="submit"
                >
                  Sign Up
                </Button>
              </Box>
              <Box my="25px">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  to="/login"
                  // type="submit"
                >
                  Sign In
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Welcome;
