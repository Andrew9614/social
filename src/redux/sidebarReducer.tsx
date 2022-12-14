import { DispatchAction, SidebarPage } from './type';

const initialState: SidebarPage = {
  friendsListMini: [
    {
      id: 0,
      name: 'Masha',
      link: 'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25',
    },
    {
      id: 1,
      name: 'Sasha',
      link: 'https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg',
    },
    {
      id: 2,
      name: 'Dasha',
      link: 'https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/0x0.jpg?format=jpg&width=1200',
    },
  ],
};

export const sidebarReducer = (
  state: SidebarPage = initialState,
  action: DispatchAction
): SidebarPage => {
  return state;
};
