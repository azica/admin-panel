import { InterfaceIcon, CalendarIcon, MoneyIcon, SettingsIcon, FolderOpenIcon, QuestionIcon, SupportIcon, SocialIcon, HomeIcon } from "assets/icons";

export const sideMenu: SideMenuItem[] = [
    { id: 1, url: "/", title: "Главная", icon: HomeIcon },
    { id: 2, url: "/schedule", title: "Расписание", icon: CalendarIcon },
    { id: 3, url: "/payment", title: "Оплата", icon: MoneyIcon },
    { id: 4, url: "/achivements", title: "Достижения", icon: SocialIcon },
    { id: 5, url: "/trainings", title: "Тренажеры", icon: InterfaceIcon },
    { id: 6, url: "/library", title: "Библиотека", icon: FolderOpenIcon },
    { id: 7, url: "/connections", title: "Проверка связи", icon: SupportIcon },
    { id: 8, url: "/settings", title: "Настройки", icon: SettingsIcon },
    { id: 9, url: "/questions", title: "Вопросы", icon: QuestionIcon },
];