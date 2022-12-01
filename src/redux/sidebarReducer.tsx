import { DispatchAction, SidebarPage } from "./type";

type SidebarReducer = (state: SidebarPage, action: DispatchAction) => SidebarPage | undefined

export const sidebarReducer: SidebarReducer = (state, action) => {
	return state;
}