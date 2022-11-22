import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { changePriority } from "../fetch/ApiFetch";

const PRIORITY = {
  high: "HIGH",
  middle: "MIDDLE",
  low: "LOW"
} as const;

type PriorityType = typeof PRIORITY;
type PriorityKey = keyof PriorityType;
type Priority = PriorityType[PriorityKey];

type Status = "NOT STARTED" | "DOING" | "DONE"

type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
};

type Props = {
  priority: Priority,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  todo: Todo,
  todos: Todo[]
}

export default function PriorityButton(props: Props) {

  const {priority, setTodos,todo, todos} = props;
  const [color, setColor]= useState<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined>();
  
  useEffect(() => {  
    return () => {
      if(priority == PRIORITY.high){
        setColor("error");      
      } else if (priority == PRIORITY.middle){
        setColor("inherit");
      } else {
        setColor("primary");
      }
    }
  }, [handlePriorityClick])

  function handlePriorityClick(id :number,priority:String): void{
    const test = changePriority(id,priority)
    if(priority === "HIGH"){
      priority = "MIDDLE";
      setColor("inherit");
    } else if(priority === "MIDDLE"){
      priority = "LOW";
      setColor("primary");
    } else if(priority === "LOW"){
      priority = "HIGH";
      setColor("error");
    }

    setTodos(
      todos.map((todo,index)=> (index === id ? Object.assign(todo,{priority: priority}): todo))
    );
  }

  return (
    <Button variant="text" color={color} onClick={() => handlePriorityClick(todo.id -1,priority)} sx={{ width: 120, padding: 1 }}>{priority}</Button>
  )
}
