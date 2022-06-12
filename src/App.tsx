import { GlobalStyle } from './styles/GlobalStyle'
import { useEffect, useState } from 'react';
import Notification from './components/Notification';
export function App() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  useEffect(() => {
    window.Main.on("notification", (notification: Notification) => {
      setNotifications((old) => [...old, notification]);
    });
  }, []);
  useEffect(() => {

  }, [notifications]);
  return (
    <>
      <GlobalStyle />
        {
          notifications.map(notification => ((<Notification notification={notification}/>)))
        }
    </>
  )
}