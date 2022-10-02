export class Task {

    id: number = 0
    name: string = ''
    status: "active" | "in-progress" | "done" = "active"
    description: string = ''

    children: Task[] = []

}