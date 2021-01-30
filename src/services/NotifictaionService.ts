import NotificationType from "../types/Notification.type";
import { store } from "react-notifications-component";

class NotificationService {
    public static TYPE_SUCCESS: NotificationType = "success";
    public static TYPE_WARNING: NotificationType = "warning";
    public static TYPE_DEFAULT: NotificationType = "default";
    public static TYPE_DANGER: NotificationType = "danger";
    public static TYPE_INFO: NotificationType = "info";

    public addSuccess = (message: string) => {
        this.addMessage(message, NotificationService.TYPE_SUCCESS);
    }

    public addWarning = (message: string) => {
        this.addMessage(message, NotificationService.TYPE_WARNING);
    }

    public addDefault = (message: string) => {
        this.addMessage(message, NotificationService.TYPE_DEFAULT);
    }

    public addDanger = (message: string) => {
        this.addMessage(message, NotificationService.TYPE_DANGER);
    }

    public addInfo = (message: string) => {
        this.addMessage(message, NotificationService.TYPE_INFO);
    }

    private addMessage = (message: string, notificationType: NotificationType) => {
        store.addNotification({
            message,
            type: notificationType,
            insert: "top",
            container: "top-right",
            animationIn: ["animated flipInY"],
            animationOut: ["animated flipOutY"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
        });
    }
}

export default NotificationService;
