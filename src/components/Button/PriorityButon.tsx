import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { changePriority } from "../../fetch/ApiFetch";
import{ useDispatch } from "react-redux";

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
  flag: number;
};

type Props = {
  priority: Priority,
  todo: Todo,
}

export default function PriorityButton(props: Props) {
  const {priority,todo} = props;
  const [color, setColor]= useState<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined>();
  const dispatch = useDispatch();

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
  }, [])

  function handlePriorityClick(id :number,priority:Priority): void{
    changePriority(id,priority)
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

    dispatch({
      type: 'CHANGE_TODOS_PRIORITY',
      payload: {id: id, priority: priority},
    }
  )}

  return (
    <Button variant="text" color={color} onClick={() => handlePriorityClick(todo.id,priority)} sx={{ width: 120, padding: 1 }}>{priority}</Button>
  )
}
