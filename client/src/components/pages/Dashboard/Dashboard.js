import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { FiBarChart } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
export default function App() {
  const { user } = useUserAuth();
  const [depositData, setDepositData] = useState();
  const [affiliateCount, setAffiliateCount] = useState();

  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const docRef = await getDocs(collection(db, "Deposits"));
    for (let i = 0; i < docRef.size; i++) {
      if (docRef.docs[i].data().id === auth.currentUser.uid) {
        setDepositData(docRef.docs[i].data());
      }
    }

    const userRef = await getDocs(collection(db, "users"));
    let count = 0;

    for (let i = 0; i < userRef.docs.length; i++) {
      console.log(
        userRef.docs[i].data().referredBy?.trim() == auth.currentUser.uid
      );
      if (userRef.docs[i].data().referredBy?.trim() === auth.currentUser.uid) {
        count += 1;
      }
    }
    setAffiliateCount(count);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="App">
      <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <MdOutlineSupervisorAccount />
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {depositData?.verified === true ? depositData.amount : 0}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">My Deposit</p>
            </div>
            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{
                  color: "rgb(255, 244, 229)",
                  backgroundColor: "#fff",
                }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <BsBoxSeam />
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">0</span>
              </p>
              <p className="text-sm text-gray-400  mt-1">My Investments</p>
            </div>

            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
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
              <p className="text-sm text-gray-400  mt-1">My returns</p>
            </div>

            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
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
              <p className="text-sm text-gray-400  mt-1">My Bonuses</p>
            </div>

            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <MdOutlineSupervisorAccount />
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">0</span>
              </p>
              <p className="text-sm text-gray-400  mt-1">My Cooperation</p>
            </div>
            <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                <AiFillDollarCircle />
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{affiliateCount}</span>
              </p>
              <p className="text-sm text-gray-400  mt-1">My Affiliate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
