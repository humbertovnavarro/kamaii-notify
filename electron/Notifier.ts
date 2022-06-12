export interface Notification {
    title: string;
    body: string;
    thumbnail?: string;    
    timestamp?: number;
}

type NotifierCallback = (notification: Notification) => void;
export default class Notifier {
    callback: NotifierCallback;
    constructor(callback: NotifierCallback) {
        this.callback = callback;
    }
}