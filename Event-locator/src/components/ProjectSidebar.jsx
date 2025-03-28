import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-slate-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div className="mt-4">
                <Button onClick={onStartAddProject} className="w-full">
                    + Add Project
                </Button>
            </div>
        </aside>
    );
}
