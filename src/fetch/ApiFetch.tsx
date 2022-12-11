type Todo = {
	id: number;
	task: String;
	detail: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
	flag: number;
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
// 1件取得
export async function getTodo(id: string | undefined):Promise<Todo> {
	const response = await fetch(`/TodoManage/Search/?id=${id}`)
	return await response.json()
}

// status更新
export async function changeStatus(id:number, status:Status):Promise<Todo[]> {
	const url = `/TodoManage/setStatus`;
	const params = {method: "PUT", body: JSON.stringify({id: id, status: status})}
	const response = await fetch(url,params)
	return await response.json()
}

// priority更新
export async function changePriority(id:number, priority:Priority):Promise<Todo[]> {
	const url = `/TodoManage/setPriority`;
	const params = {method: "PUT", body: JSON.stringify({id: id, priority: priority})}
	const response = await fetch(url,params)
	return await response.json()
}

// flag更新
export async function changeFlag(id:number, flag:number):Promise<void> {
	const url = `/TodoManage/setFlag`;
	const params = {method: "PUT", body: JSON.stringify({id: id, flag: flag})}
	await fetch(url,params)
	// return await response.json()
}

// CREATE TODO
export async function createTodo(todo:NewTodo):Promise<Todo[]> {
	const url = `/TodoManage/create`;
	const params = {method: "POST", body: JSON.stringify(todo)}
	const response = await fetch(url,params)
	return await response.json()
}

// DELETE TODO
export async function deleteTodo(id:Number):Promise<void> {
	const url = `/TodoManage/delete/${id}`;
	const params = {method: "DELETE"}
	await fetch(url,params)
}
