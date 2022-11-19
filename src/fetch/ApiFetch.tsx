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
	const response = await fetch(`/TodoManage/setStatus?id=${id}&status=${status}`)
	return await response.json()
}