import { to12Hours } from "../../utils/to12Hours";

export default function TodoItem(props) {
  return (
    <div className="flex flex-ro mt-1 items-center px-2 py-1 rounded-lg">
      <div className="ml-3">
        <div
          className={
            props.todoItem?.completed
              ? "line-through text-gray-700 w-52 text-md capitalize"
              : "w-52 text-md capitalize"
          }
        >
          {props.todoItem?.task == "" ? "Empty Task" : props.todoItem?.task}
        </div>
        <div className="text-xs text-gray-400">
          {props.todoItem?.deadline?.toString().slice(0, 15) || "No deadline"}{" "}
          {props.todoItem?.deadline && to12Hours(props.todoItem.deadline?.toLocaleTimeString().slice(0, 5))}
        </div>
      </div>

      <input
        type="checkbox"
        className="checkbox checkbox-warning ml-3 checkbox-sm"
        onClick={() => {
          props.handleCompleted(props.todoItem.id);
        }}
      />
      <div
        className="text-red-700 items-center ml-4"
        onClick={() => {
          props.handleDelete(props.todoItem.id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
}
