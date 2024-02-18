import React from "react";
import { FiBarChart } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import {AiFillDollarCircle} from 'react-icons/ai';
import {FcMoneyTransfer} from 'react-icons/fc'

const Dashboard = () => {
 

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          <div
            key={"Customers"}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <MdOutlineSupervisorAccount />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">
               0
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">No. of Clients</p>
          </div>
          <div
            key={"Transactions"}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{
                color: "rgb(255, 244, 229)",
                backgroundColor: "rgb(254, 201, 15)",
              }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <BsBoxSeam />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{"0"}</span>
            </p>
            <p className="text-sm text-gray-400  mt-1">Amt. of approved deposits</p>
          </div>

          <div
            key={"Pending Approval"}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{
                color: "rgb(228, 106, 118)",
                backgroundColor: "rgb(255, 244, 229)",
              }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <FiBarChart />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">0</span>
            </p>
            <p className="text-sm text-gray-400  mt-1">Amt. of approved withdrawls</p>
          </div>

          <div
            key={"Total funds"}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{
                color: "rgb(0, 194, 146)",
                backgroundColor: "rgb(235, 250, 242)",
              }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <HiOutlineRefresh />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{"0"}</span>
            </p>
            <p className="text-sm text-gray-400  mt-1">Amt. of bonuses</p>
          </div>


          <div
            key={"Customers"}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <MdOutlineSupervisorAccount />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">
               0
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">No. of Affiliate partners</p>
          </div>
          <div
            key={"Customers"}
            className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
          >
            <button
              type="button"
              style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
            >
              <AiFillDollarCircle />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">
               0
              </span>
            </p>
            <p className="text-sm text-gray-400  mt-1">Amt. of Affiliate deposits</p>
          </div>

          <div
          key={"Customers"}
          className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
        >
          <button
            type="button"
            style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
            className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
          >
            <FcMoneyTransfer />
          </button>
          <p className="mt-3">
            <span className="text-lg font-semibold">
             0
            </span>
          </p>
          <p className="text-sm text-gray-400  mt-1">Amt. of Affiliate commissions</p>
        </div>

        <div
        key={"Customers"}
        className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
      >
        <button
          type="button"
          style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
          className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
        >
          <MdOutlineSupervisorAccount />
        </button>
        <p className="mt-3">
          <span className="text-lg font-semibold">
           0
          </span>
        </p>
        <p className="text-sm text-gray-400  mt-1">No. of cooperation request</p>
      </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
