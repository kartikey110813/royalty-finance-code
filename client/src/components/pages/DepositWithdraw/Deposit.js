import React, { useContext, useState } from 'react'
import BankAccount from '../../BankAccount'
import TransferWithCourior from '../../TransferWithCourior';
import "./Deposit.css";
import Investus from '../Invest'
import LanguageContext from "../../../context/LanguageContext";
const   DepositWithdraw = () => {
  const { language } = useContext(LanguageContext);
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
}
  return (
    <>
     <div style={{ maxWidth: "600px", margin: "auto" }}>

<button
    onClick={() => genreClickHandler('bankAccount')}
    className="btn-check"
    key={"bankAccount"}
>
{language === 'en' ? "Invest through bank account" : "Investujte cez bankový účet"}
</button>
<button
    onClick={() => genreClickHandler('investCard')}
    className="btn-check"
    key={"investCard"}
>
    {language === 'en' ? "Invest through card" : "Investujte cez kartu"}
</button>

<button
    onClick={() => genreClickHandler('couriorTranfer')}
    className="btn-check"
    key={"couriorTranfer"}
>
    {language === 'en' ? "Transfer with Courior" : "Prevod s Courior"}
</button>
</div>
<hr style={{ width: "80%", margin: "auto" }} />

{

selectedGenre === 'investCard' ? <Investus /> : <div></div>}

{
selectedGenre === 'bankAccount' ? <BankAccount /> : <div></div>
}

{
selectedGenre === 'couriorTranfer' ? <TransferWithCourior /> : <div></div>
}
    </>
  )
}

export default DepositWithdraw