import type { Notification } from "../@types/notification";
export default  (props: { notification: Notification}) => {
    const { title, body, thumbnail } = props.notification;
    return (
        <div className="flex">
            <img src={thumbnail} />
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}