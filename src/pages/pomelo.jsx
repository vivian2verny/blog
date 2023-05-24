import { Description, Title } from "react-head-meta";
import VarietyB from "../components/bringingVariety";
import BudgetFooter from "../components/budgetFooter";
import CreateStore from "../components/createStore";
import DoMore from "../components/doMore";
import Info from "../components/info";
import PaymentRest from "../components/paymentRestriction";
import PomeloDevelopers from "../components/pomeloDevelopers";
import PomeloHeader from "../components/pomeloHeader";
import PomeloHero from "../components/pomeloHero";
import PomeloWallet from "../components/pomeloWallet";

function Pomelo() {
  return (
    <div>
    <div>
      <Title title="Payment Gateway - Simplified Payment Process" />
      <Description description="Simplify your payments and transactions using stackivy's payment gateway-pomelo" />
    </div>
     <PomeloHeader/>
     <PomeloHero/>
     <VarietyB/>
     <CreateStore/>
     <PomeloWallet/>
     <PomeloDevelopers/>
     <PaymentRest/>
     <DoMore/>
     <Info/>
     <BudgetFooter/>
    </div>
  );
}

export default Pomelo;
