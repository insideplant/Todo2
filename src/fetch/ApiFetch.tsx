type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
};

type NewTodo = {
    task: String;
    detail: String;
    status: String;
    priority:  String;
    created_at:  String | null;
};

type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW"

// 全件取得
export async function getAllTodos():Promise<Todo[]> {
	const response = await fetch('/TodoManage')
	return await response.json()
}

// status更新
export async function changeStatus(id:number, status:Status):Promise<Todo[]> {
	console.log(status)
	console.log(id);
	const url = `/TodoManage/setStatus`;
	const params = {method: "PUT", body: JSON.stringify({id: id + 1, status: status})}
	const response = await fetch(url,params)
	return await response.json()
}

// priority更新
export async function changePriority(id:number, priority:Priority):Promise<Todo[]> {
	console.log(priority)
	const url = `/TodoManage/setPriority`;
	const params = {method: "PUT", body: JSON.stringify({id: id + 1, priority: priority})}
	const response = await fetch(url,params)
	return await response.json()
}

// CREATE TODO
export async function createTodo(todo:NewTodo):Promise<Todo[]> {
	const url = `/TodoManage/create`;
	const params = {method: "POST", body: JSON.stringify(todo)}
	const response = await fetch(url,params)
	return await response.json()
}
