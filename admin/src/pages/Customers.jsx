import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Toolbar,
  Sort,
  Filter,
  Search,
} from "@syncfusion/ej2-react-grids";

import { customersGrid } from "../data/dummy";
import { Header } from "../components";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";

export const docOnetemplate = (props) => {
  return (
    <div style={{ color: "red" }}>
      <a href={props.Document1} target="_blank">
        {props.Document1}
      </a>
    </div>
  );
};
export const docTwotemplate = (props) => {
  return (
    <div style={{ color: "red" }}>
      <a href={props.Document2} target="_blank">
        {props.Document2}
      </a>
    </div>
  );
};
export const docThreetemplate = (props) => {
  return (
    <div style={{ color: "red" }}>
      <a href={props.Document3} target="_blank">
        {props.Document3}
      </a>
    </div>
  );
};

const Customers = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const [allUsers, setAllUsers] = useState([]);

  

  useEffect(() => {
     db.collection('users').onSnapshot((snapshot) => {
        setAllUsers(
            snapshot.docs.map((doc) => ({
                name:doc.data().name,
                surname:doc.data().surname,
                phonenumber:doc.data().phonenumber,
                CustomerID:doc.id,
                Document1:doc.data().Document1,
                Document2:doc.data().Document2,
                Document3:doc.data().Document3,
            }))
        )
     })
     console.log(allUsers)
  }, []);


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
        <GridComponent
          dataSource={allUsers}
          enableHover={false}
          allowPaging
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          allowSorting
          style={{ zIndex: "0" }}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          
            <ColumnDirective
            field="name"
            headerText="name"
            width="150"
            textAlign="center"
          />
            <ColumnDirective
            field="surname"
            headerText= "surname"
            width= "150"
            textAlign= "Center"
          />
            <ColumnDirective
            field="phonenumber"
            headerText= "phonenumber"
            width= "150"
            textAlign= "Center"
          />
            <ColumnDirective
            field="CustomerID"
            headerText= "Id"
            width= "150"
            textAlign= "Center"
          />
            <ColumnDirective
            field="Document1"
            headerText= "Doc 1"
            width= "150"
            textAlign= "Center"
            template= {docOnetemplate}
          />
            <ColumnDirective
            field="Document2"
            headerText= "Doc 2"
            width= "150"
            textAlign= "Center"
            template= {docTwotemplate}

          />
            <ColumnDirective
            field="Document3"
            headerText= "Doc 3"
            width= "150"
            textAlign= "Center"
            template= {docThreetemplate}

          />
          
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Sort, Filter, Search]} />
        </GridComponent>
    </div>
  );
};

export default Customers;
