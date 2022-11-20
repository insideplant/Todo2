type Todo = {
	id: number;
	task: String;
	status: Status;
	priority:  String;
	created_at:  String;
	updated_at:  String;
};

type Status = "NOT STARTED" | "DOING" | "DONE"

// 全件取得
export async function getAllTodos():Promise<Todo[]> {
	const response = await fetch('/TodoManage')
	return await response.json()
}

// 検索


// 更新
export async function adTodo(id:number, status:String):Promise<Todo[]> {
	console.log(status)
	const url = `/TodoManage/setStatus`;
	const params = {method: "PUT", body: JSON.stringify({id: id + 1, status: status})}
	const response = await fetch(url,params)
	return await response.json()
}