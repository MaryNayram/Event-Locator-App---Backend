import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16 p-6 bg-white rounded-lg shadow-md">
            <form>
                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-4 mb-4">
                    <button type="button" className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                    <Button type="submit">Save</Button>
                </div>

                {/* Form Inputs */}
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" type="date" />
            </form>
        </div>
    );
}
