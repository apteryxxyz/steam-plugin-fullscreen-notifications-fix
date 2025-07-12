import { replacePatch } from '@steambrew/client';
import logger from './logger.js';
import Steam from './steam.js';

// Steam calls `ClearAllToastNotifications` when it detects a fullscreen app is
// focused, ultimately preventing any Steam notifications from being displayed.
// This patch prevents that behaviour by making `ClearAllToastNotifications` a no-op.
const patch = replacePatch(
  Steam.NotificationStore,
  'ClearAllToastNotifications',
  () => {
    logger.debug(
      'Intercepted ClearAllToastNotifications call, preventing notification suppression',
    );
    return void 0;
  },
);
logger.info('Applied ClearAllToastNotifications patch', patch);

// Without the following, notifications leave space below for the taskbar, even
// when the app is fullscreen.
Steam.SystemUI.RegisterForFocusChangeEvents(async () => {
  logger.debug('Focus changed, resetting usable area...', false);

  // Reset the default monitor dimensions
  await Steam.FocusedAppWindowStore.QueryDefaultMonitorDimensions();

  // If there is a fullscreen window open, set the usable area to the full area
  const isFullScreen = await Steam.Window.DefaultMonitorHasFullscreenWindow();
  if (isFullScreen)
    Steam.FocusedAppWindowStore.m_defaultMonitor.m_usable =
      Steam.FocusedAppWindowStore.m_defaultMonitor.m_full;
  logger.debug(
    'Display usable area updated',
    Steam.FocusedAppWindowStore.m_defaultMonitor,
  );
});
logger.info('Registered callback for focus change events');

export default function OnPluginStart() {}
