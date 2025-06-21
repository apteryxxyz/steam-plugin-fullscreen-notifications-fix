import type {} from '@steambrew/client';

type SB_Window = (typeof window)['SteamClient']['Window'];
type SB_SystemUI = (typeof window)['SteamClient']['System']['UI'];
type SB_NotificationStore = (typeof window)['NotificationStore'];

//

namespace Steam {
  export interface NotificationStore extends SB_NotificationStore {
    ClearAllToastNotifications(): void;
  }

  export const NotificationStore: NotificationStore = //
    Reflect.get(window, 'NotificationStore');
}

//

namespace Steam {
  export interface MonitorDimensions {
    m_nHeight: number;
    m_nWidth: number;
    m_nTop: number;
    m_nLeft: number;
  }

  export interface FocusedAppWindowStore {
    m_defaultMonitor: {
      m_full: MonitorDimensions;
      m_usable: MonitorDimensions;
    };
    QueryDefaultMonitorDimensions(): Promise<void>;
  }

  export const FocusedAppWindowStore: FocusedAppWindowStore = //
    Reflect.get(window, 'FocusedAppWindowStore');
}

//

namespace Steam {
  export interface Window extends SB_Window {}

  export const Window: Window = //
    Reflect.get(window, 'SteamClient')?.Window;
}

//

namespace Steam {
  export interface SystemUI extends SB_SystemUI {}

  export const SystemUI: SystemUI = //
    Reflect.get(window, 'SteamClient')?.System?.UI;
}

//

export default Steam;
