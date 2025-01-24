// Import required dependencies
import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Divider,
} from "@mui/material";

const AddBill: React.FC = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: "1200px", margin: "auto" }}>
      {/* Search Section */}
      <Box mb={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Search Meter Number :-
        </Typography>
        <Grid container spacing={2} alignItems="center" mt={1}>
          <Grid item xs={12} sm={10} md={2}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter Meter No"
            />
          </Grid>
          <Grid item xs={4} sm={2} md={1}>
            <Button
              fullWidth
              variant="contained"
              color="warning"
              sx={{
                color: "#fff",
                "&:hover": { backgroundColor: "darkorange" },
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {/* Personal Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Personal Detail
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Personal Name<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                type="text"
                fullWidth
                variant="outlined"
                placeholder="Person Name"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Email<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                fullWidth
                type="email"
                required
                variant="outlined"
                size="small"
                placeholder="E-mail"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Mobile No<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                type="number"
                variant="outlined"
                placeholder="Mobile No"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Designation<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Designation"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Department<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Department"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Department Code<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Department Code"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <p style={{ textTransform: "uppercase" }}>
                Address<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Address"
                required
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Quarter Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Quarter Detail
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Quarter ID<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Quarter ID"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Quarter Type<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Quarter Type"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Location<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Location"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Meter Type<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Meter Type"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Supply Phase<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Supply Phase"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p style={{ textTransform: "uppercase" }}>
                Comm. Date<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Comm. Date"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p style={{ textTransform: "uppercase" }}>
                Free Unit Type<span style={{ color: "red" }}>*</span>
              </p>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Free Unit Type"
                required
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* more */}
      {/* <Box sx={{ padding: 2, maxWidth: "1200px", margin: "auto" }}> */}
      {/* Meter Detail (Main) Section */}
      <Box mb={3} sx={{ marginTop: "15px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Meter Detail (Main)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <p style={{ textTransform: "uppercase" }}>
              Meter No<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Meter No"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <p style={{ textTransform: "uppercase" }}>
              Period From<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Period From"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <p style={{ textTransform: "uppercase" }}>
              Period To<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Period To"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <p style={{ textTransform: "uppercase" }}>
              Reading From<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Reading From"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <p style={{ textTransform: "uppercase" }}>
              Reading To<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Reading To"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <p style={{ textTransform: "uppercase" }}>
              Unit Consumed<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Unit Consumed"
              required
            />
          </Grid>
        </Grid>
      </Box>

      {/* Meter Detail (Sub) Section */}
      <Box mb={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Meter Detail (Sub)
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Meter No<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Meter No"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Address<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Address"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Reading From<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Reading From"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Reading To<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Reading To"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Unit Consumed<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Unit Consumed"
              required
            />
          </Grid>
        </Grid>
      </Box>

      {/* Current Bill Detail Section */}
      <Box mb={3}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Current Bill Detail
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Total Unit Consumed<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Total Unit Consumed"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Free Units<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Free Units"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Chargeable Unit<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Chargeable Unit"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Total Unit Charges<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Total Unit Charges"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Free Units<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Meter Rent"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Current Bill<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Current Bill"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Prev. Balance<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Prev. Balance"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Payable Amount<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Payable Amount"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Payable Due Amount<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Payable Amount After Due Date"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Remarks<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Remarks"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <p style={{ textTransform: "uppercase" }}>
              Due Date<span style={{ color: "red" }}>*</span>
            </p>
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              placeholder="Due Date"
              required
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddBill;
