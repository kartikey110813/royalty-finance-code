import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag, FiBarChart, FiCreditCard } from "react-icons/fi";
import { BsBoxSeam, BsCurrencyDollar, BsShield } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const urltemplate = (props) => {
  return (
    <div style={{ color: "red" }}>
      <a href={props.Document3} target="_blank">
        {props.Document3}
      </a>
    </div>
  );
};

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const gridOrderAction = (props) => (
  <button
    type="button"
    style={{ background: props.approveStatusColor }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.approveStatus}
  </button>
);

export const gridCustomersAction = (props) => (
  <button
    type="button"
    style={{ background: props.approveStatusColor }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    update
  </button>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.Document3}
      alt="employee"
    />
    <div style={{ margin: "2px" }}>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </div>
  </div>
);

export const gridMessageReply = (props) => {
  var input;

  const inputVal = () => {
    input = prompt("Enter Your Reply");
    replyFunc();
  };

  const replyFunc = () => {
    db.collection("messages")
      .doc(props.ID)
      .collection("admin-reply")
      .doc("message")
      .set({
        reply: input,
      })
      .then(() => {
        alert("Your Reply is :- " +input);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <button
        type="button"
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
        style={{ background: "green", color: "white" }}
        onClick={inputVal}
      >
        Reply
      </button>
    </div>
  );
};

export const gridAffiliateStatus = (props) => {
  const changeStatusApprove = () => {
    db.collection("Deposits")
      .doc(props.id)
      .update({
        verified: true,
      })
      .then(() => {
        console.log("hello");
      });
  };

  const changeStatusDisapprove = () => {
    db.collection("Deposits")
      .doc(props.id)
      .update({
        verified: false,
      })
      .then(() => {
        console.log("hello");
      });
  };

  return (
    <div>
      <button
        type="button"
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
        style={{ background: "green", color: "white" }}
        onClick={changeStatusApprove}
      >
        Approve
      </button>
      <br />
      <button
        type="button"
        className="text-white py-1 px-2 capitalize rounded-2xl text-md"
        style={{ background: "red", color: "white" }}
        onClick={changeStatusDisapprove}
      >
        Disapprove
      </button>
    </div>
  );
};

// export const customersGrid = [
//   // { type: "checkbox", width: "50" },
//   {
//     field: "name",
//     headerText: "Name",
//     width: "150",
//     textAlign: "Center",
//   },
//   {
//     field: "surname",
//     headerText: "surname",
//     width: "150",
//     textAlign: "Center",
//   },
//   {
//     field: "phonenumber",
//     headerText: "phonenumber",
//     width: "150",
//     textAlign: "Center",
//   },
//   {
//     field: "CustomerID",
//     headerText: "Customer ID",
//     width: "120",
//     textAlign: "Center",
//     isPrimaryKey: true,
//   },
//   {
//     field: "Document1",
//     headerText: "Document 1",
//     width: "150",
//     textAlign: "Center",
//     template: docOnetemplate,
//   },
//   {
//     field: "Document2",
//     headerText: "Document 2",
//     width: "150",
//     textAlign: "Center",
//     template: docTwotemplate,
//   },
//   {
//     field: "Document3",
//     headerText: "Document 3",
//     width: "150",
//     textAlign: "Center",
//     template: docThreetemplate,
//   },
//   // {
//   //   field: "Action",
//   //   headerText: "Action",
//   //   width: "150",
//   //   textAlign: "Center",
//   //   template: gridCustomersAction,
//   // },
// ];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <FiShoppingBag />,
      },
      {
        name: "clientDatabase",
        icon: <FiShoppingBag />,
      },
      {
        name: "AffiliateDatabase",
        icon: <FiShoppingBag />,
      },
      {
        name: "KYCDatabase",
        icon: <FiShoppingBag />,
      },
      {
        name: "Deposits",
        icon: <FiShoppingBag />,
      },
      {
        name: "Withdrawls",
        icon: <FiShoppingBag />,
      },
      {
        name: "Bonus",
        icon: <FiShoppingBag />,
      },
      {
        name: "ChangeOfData",
        icon: <FiShoppingBag />,
      },
      {
        name: "AffiliateRequests",
        icon: <FiShoppingBag />,
      },
      {
        name: "CooperationRequests",
        icon: <FiShoppingBag />,
      },
      {
        name: "Messages",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "transactions",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
    ],
  },
];

export const messages = [
  {
    field: "ID",
    headerText: "ID",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Messages",
    headerText: "Messages",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "reply",
    headerText: "reply",
    width: "120",
    textAlign: "Center",
    template: gridMessageReply,
  },
];

export const cooperationRequests = [
  {
    field: "Forms",
    headerText: "Forms",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
];

// export const affiliateRequests = [
//   {
//     field: 'Name',
//     headerText: 'Name',
//     width: '150',
//     editType: 'dropdownedit',
//     textAlign: 'Center',
//   },
//   {
//     field: 'Page',
//     headerText: 'Page',
//     width: '150',
//     editType: 'dropdownedit',
//     textAlign: 'Center',
//   },
//   {
//     field: 'AnotherWayOfPromotion',
//     headerText: 'AnotherWayOfPromotion',
//     width: '150',
//     editType: 'dropdownedit',
//     textAlign: 'Center',
//   },
//   {
//     field: 'MessageToUs',
//     headerText: 'MessageToUs',
//     width: '150',
//     editType: 'dropdownedit',
//     textAlign: 'Center',
//   },
//   {
//     field: 'Approve_Disapprove',
//     headerText: 'Approve/Disapprove',
//     width: '150',
//     editType: 'dropdownedit',
//     textAlign: 'Center',
//   },
// ]

export const changeOfData = [
  {
    field: "CurrentlyInvested",
    headerText: "CurrentlyInvested",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },

  {
    field: "Revenues",
    headerText: "Revenues",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },

  {
    field: "Projects",
    headerText: "Projects",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },

  {
    field: "Operations",
    headerText: "Operations",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
];

export const bonus = [
  {
    field: "ID",
    headerText: "ID",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "ManuallyPutIn",
    headerText: "ManuallyPutIn",
    width: "120",
    textAlign: "Center",
  },
];

export const withdrawl = [
  {
    field: "ID",
    headerText: "ID",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Verified",
    headerText: "Verified",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "WithdrawalAmount",
    headerText: "WithdrawalAmount",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "WithdrawlMethod",
    headerText: "Withdrawl Method",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "Approve/Disapprove",
    headerText: "Approve/Disapprove",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "ManuallyPutIn",
    headerText: "ManuallyPutIn",
    width: "120",
    textAlign: "Center",
  },
];

export const deposit = [
  {
    field: "Name",
    headerText: "Name",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Verified",
    headerText: "Verified",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "DepositAmount",
    headerText: "Deposit Amount",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "DepositMethod",
    headerText: "Deposit Method",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "TransactionID",
    headerText: "Transaction ID",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "Documents",
    headerText: "Documents",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "Approve/Disapprove",
    headerText: "Approve/Disapprove",
    width: "120",
    textAlign: "Center",
    template: gridAffiliateStatus,
  },
  {
    field: "ManuallyPutIn",
    headerText: "ManuallyPutIn",
    width: "120",
    textAlign: "Center",
  },
];

export const kycDatabase = [
  {
    field: "Name",
    headerText: "Name",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Date",
    headerText: "Date",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "KYC",
    headerText: "KYC",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Documents",
    headerText: "Documents",
    width: "150",
    textAlign: "Center",
  },
];

export const affliateDatabase = [
  {
    field: "ID",
    headerText: "ID",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "DateOfRegistration",
    headerText: "DateOfRegistration",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "DepositedUsingID",
    headerText: "DepositedUsingID",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "CurrentYield",
    headerText: "Current Yield",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "KYC",
    headerText: "KYC",
    width: "150",
    textAlign: "Center",
  },
];

export const clientDatabase = [
  {
    field: "ID",
    headerText: "ID",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "Name",
    headerText: "Name",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "DateOfRegistration",
    headerText: "DateOfRegistration",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "DepositAmount",
    headerText: "Deposit Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "WidhdrawlAmount",
    field: "WidhdrawlAmount",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "InvestmentPeriod",
    headerText: "Investment Period",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "CurrentYield",
    headerText: "Current Yield",
    width: "150",
    textAlign: "Center",
  },
  {
    headerText: "KYC",
    field: "KYC",
    textAlign: "Center",
    width: "120",
  },
  {
    headerText: "affiliateId",
    field: "Affiliate ID",
    textAlign: "Center",
    width: "120",
  },
];

export const notificationData = [
  {
    image: avatar2,
    message: "Keegan added 1200 dollars!",
    desc: "Approve amount",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "Vipul added 120 dollars!",
    desc: "Approve amount",
    time: "11:56 AM",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const ordersGrid = [
  {
    field: "OrderItems",
    headerText: "Item",
    width: "150",
    editType: "dropdownedit",
    textAlign: "Center",
  },
  {
    field: "CustomerID",
    headerText: "CustomerID",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerText: "Total Amount",
    format: "C2",
    textAlign: "Center",
    editType: "numericedit",
    width: "150",
  },
  {
    headerText: "Status",
    template: gridOrderStatus,
    field: "OrderItems",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerText: "Order ID",
    width: "120",
    textAlign: "Center",
  },

  {
    field: "Location",
    headerText: "Location",
    width: "150",
    textAlign: "Center",
  },
  {
    headerText: "Action",
    template: gridOrderAction,
    field: "Action",
    textAlign: "Center",
    width: "120",
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "Carson",
    CustomerID: 1001,
    TotalAmount: 100,
    OrderItems: "1.2%",
    Location: "america",
    Status: "pending",
    StatusBg: "#FB9678",
    Accepturl: "a",
    approveStatus: "Approve/Decline", //deline,
    approveStatusColor: "brown",
  },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];