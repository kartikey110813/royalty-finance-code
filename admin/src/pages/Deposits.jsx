import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import {contextMenuItems, deposit } from "../data/dummy";
import { Header } from "../components";
import { db } from "../firebase";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const DepositChangeStatus = (props) => {
  const [open, setOpen] = useState(false);
  const [amount,setAmount] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
e.preventDefault()
setAmount(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(amount)
    db.collection("Deposits")
      .doc(props.id)
      .update({
        amount: amount,
      })
      .then(() => {
        console.log("hello");
      });
  };


  return (
    <div>
    <Button onClick={handleOpen}>Change Amount</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}  component="form" onSubmit={handleSubmit}>
        <TextField
                            margin="normal"
                            fullWidth
                            name="amount"
                            label="Amount"
                            type="text"
                            id="Amount"
                            value={amount}
                            onChange={handleChange}
                            style={{ background: 'white' }}
                            variant="filled"
                        />
      <br/>
      <br/>
      <Button variant="outlined" type="submit">Change</Button>
    </Box>
      </Modal>
      </div>

  );
};

const Deposits = () => {

const [deposits, setDeposits] = useState([]);

  useEffect(() => {

    db.collection('Deposits').onSnapshot((snapshot) => {
      setDeposits(
        snapshot.docs.map((doc)=>({
          Name:doc.data().name,
          Verified:doc.data().verified,
          DepositAmount:doc.data().amount,
          DepositMethod:doc.data().deposit_Method,
          id: doc.id,
        }))
      )
    })


  }, [])


  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-2 mt-24 p-2 md:p-2 bg-white rounded-3xl">
      <Header category="Page" title=" Deposits" />
      <GridComponent
        id="gridcomp"
        dataSource={deposits}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {deposit.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective
            field="Change Amount"
            headerText="Change Amount"
            width="150"
            textAlign="center"
            allowEditing={false}
            template={DepositChangeStatus}
          />
        </ColumnsDirective>

        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Deposits;
