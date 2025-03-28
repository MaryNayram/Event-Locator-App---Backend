import Logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3 max-w-md mx-auto">
            <img 
                src={Logo} 
                alt="No projects available" 
                className="w-16 h-16 object-contain mx-auto" 
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-slate-400 mb-4">
                Select a project or start a new one.
            </p>
            <Button onClick={onStartAddProject} className="mt-4">
                Create New Project
            </Button>
        </div>
    );
}
