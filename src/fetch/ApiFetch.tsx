type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  Priority;
	created_at:  String;
	updated_at:  String;
};

type Status = "NOT STARTED" | "DOING" | "DONE"
type Priority = "HIGH" | "MIDDLE" | "LOW"

// 全件取得
export async function getAllTodos():Promise<Todo[]> {
	const response = await fetch('/TodoManage')
	return await response.json()
}

// 検索


// 更新
export async function changeStatus(id:number, status:String):Promise<Todo[]> {
	console.log(status)
	const url = `/TodoManage/setStatus`;
	const params = {method: "PUT", body: JSON.stringify({id: id + 1, status: status})}
	const response = await fetch(url,params)
	return await response.json()
}

// priority更新
export async function changePriority(id:number, status:String):Promise<Todo[]> {
	console.log(status)
	const url = `/TodoManage/setPriority`;
	const params = {method: "PUT", body: JSON.stringify({id: id + 1, status: status})}
	const response = await fetch(url,params)
	return await response.json()
}


