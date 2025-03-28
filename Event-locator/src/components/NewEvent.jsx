import Button from "./Button";
import Input from "./Input";

export default function NewEvent() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
        <li><Button>Save Event</Button></li>
      </menu>
      <div>
        <Input label="Event Name" />
        <Input label="Description" textarea />
        <Input label="Date & Time" type="datetime-local" />
        <Input label="Location (Lat, Long)" />
        <Input label="Category" />
      </div>
    </div>
  );
}
