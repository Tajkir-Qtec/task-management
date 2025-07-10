export default interface Task {
    _id: string;
    title: string;
    description: string;
    priority: string;
    date: string;
    status: 'completed' | 'incompleted';
}