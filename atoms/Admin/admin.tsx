import { atom } from "jotai";


export enum AdminSidebarItemsEnum {
    Home = "Home",
    Analytics = "Analytics",
    Users = "Users",
    Shops = "Shops",
    Profile = "Profile",
}
export const adminSidebarItemsAtom = atom<AdminSidebarItemsEnum>(AdminSidebarItemsEnum.Home);