import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty duty={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;