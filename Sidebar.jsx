
import { UseStateLab } from "../labs/day1/UseStateLab";
export default function Sidebar({ setLab }) {
  return (
    <div style={{width:200}}>
      <button onClick={() => setLab(<UseStateLab />)}>useState</button>
    </div>
  );
}
