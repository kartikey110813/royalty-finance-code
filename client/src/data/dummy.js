import React from 'react';
import { FiShoppingBag} from 'react-icons/fi';

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
  return <div style={{ color: 'red' }}><a href={props.Document3} target="_blank">{props.Document3}</a></div>;
};
export const docOnetemplate = (props) => {
  return <div style={{ color: 'red' }}><a href={props.Document1} target="_blank">{props.Document1}</a></div>;
};
export const docTwotemplate = (props) => {
  return <div style={{ color: 'red' }}><a href={props.Document2} target="_blank">{props.Document2}</a></div>;
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
    {props.approveStatus}
  </button>
);



export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <FiShoppingBag />,
      },
      {
        name: 'account',
        icon: <FiShoppingBag />,
      },
      {
        name: 'documents',
        icon: <FiShoppingBag />,
      },
      {
        name: 'deposit',
        icon: <FiShoppingBag />,
      },
      {
        name: 'withdraw',
        icon: <FiShoppingBag />,
      },
      {
        name: 'Invest',
        icon: <FiShoppingBag />,
      },
      {
        name: 'cooperation',
        icon: <FiShoppingBag />,
      },
      {
        name: 'affiliate',
        icon: <FiShoppingBag />,
      },
    ],
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];