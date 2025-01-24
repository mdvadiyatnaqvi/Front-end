import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../../components/customInput/CustomInput";
import CustomSelect from "../../../components/customSelect/CustomSelect";
import CustomSearchComponent from "../../../components/customSearchComponent/CustomSearchComponent";

export default function MakePayment() {
  const [searchText, setSearchText] = useState<string>("");
  const [formValues, setFormValues] = useState({
    meterNo: "",
    billNo: "",
    billMonth: "",
    periodFrom: "",
    periodTo: "",
    dueDate: "",
    oldReading: "",
    newReading: "",
    unitConsumed: "",
    freeUnit: "",
    chargeableUnit: "",
    unitCharges: "",
    meterRent: "",
    prevBalance: "",
    billAmount: "",
    afterDueDate: "",
    adjustment: "",
    totalAmount: "",
    reason4Adjustment: "",
    remarks: "",
    paymentMode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReasonForAdjustSelect = () => {};
  const handlePaymentModeOptionChange = () => {};
  const handleSearch = () => {};
  const handleClear = () => {
    setSearchText("");
  };

  return (
    <Box sx={{ margin: "0px", backgroundColor: "#e9f3ffed" }}>
      <CustomSearchComponent
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleClear={handleClear}
        title="Search Meter Number :"
        placeholder="Search Meter Number"
        inputLabel="Enter Meter No."
        styles={{
          container: { marginBottom: "20px", paddingRight: 6 },
          inputField: { borderColor: "rgb(137 192 234)" },
        }}
      />

      <Box
        sx={{
          padding: 1,
          marginTop: "10px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          background: "white",
        }}
      >
        <Grid container spacing={2}>
          {[
            { name: "meterNo", label: "METER NO" },
            { name: "billNo", label: "BILL NO" },
            { name: "billMonth", label: "BILL MONTH" },
            { name: "periodFrom", label: "PERIOD FROM" },
            { name: "periodTo", label: "PERIOD TO" },
            { name: "dueDate", label: "DUE DATE" },
            { name: "oldReading", label: "OLD READING" },
            { name: "newReading", label: "NEW READING" },
            { name: "unitConsumed", label: "UNIT CONSUMED" },
            { name: "freeUnit", label: "FREE UNIT" },
            { name: "chargeableUnit", label: "CHARGABLE UNIT" },
            { name: "unitCharges", label: "UNIT CHARGES" },
            { name: "meterRent", label: "METER RENT" },
            { name: "prevBalance", label: "PREV. BALANCE" },
            { name: "billAmount", label: "BILL AMOUNT" },
            { name: "afterDueDate", label: "AFTER DUE DATE" },
            { name: "adjustment", label: "ADJUSTMENT" },
            { name: "totalAmount", label: "TOTAL AMOUNT" },
          ].map(({ name, label }) => (
            <Grid key={name} item xs={12} sm={6} md={3} lg={2}>
              <CustomInput
                isMandatory
                label={label}
                value={formValues[name]}
                onChange={handleChange}
                name={name}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4}>
            <CustomSelect
              isMandatory
              label="REASON 4 ADJUST"
              value={formValues.reason4Adjustment}
              onChange={handleReasonForAdjustSelect}
              name="reason4Adjustment"
              options={["Late delivery of bill", "Technical problem", "Other"]}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              isMandatory
              label="REMARKS"
              value={formValues.remarks}
              onChange={handleChange}
              name="remarks"
              width="250px"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: 1, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "5px", margin: "20px 0px", minWidth: "380px", background: "white" }}>
        <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 3px 5px;", padding: "5px", margin: "0px 1px", minWidth: "380px", borderLeft: "4px solid orange" }}>
              <Typography variant="h6">Payment Details</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              label="PAYMENT MODE"
              value={formValues.paymentMode}
              onChange={handlePaymentModeOptionChange}
              name="paymentMode"
              options={["Online/Other", "Cheque/ DD"]}
            />
          </Grid>
        </Grid>
      </Box>

      <footer>
        <Typography>
          © 2024 Navika Digital. All rights reserved. For inquiries, contact:
          info@navikadigital.com.
        </Typography>
      </footer>
    </Box>
  );
}