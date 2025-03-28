import Logo from "../assets/no-events.png";
import Button from "./Button";

export default function NoEventSelected({ onStartAddEvent }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={Logo} alt="" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Event Selected</h2>
      <p className="text-slate-400 mb-4">Select an event or create a new one</p>
      <p>
        <Button onClick={onStartAddEvent}>Create new event</Button>
      </p>
    </div>
  );
}
