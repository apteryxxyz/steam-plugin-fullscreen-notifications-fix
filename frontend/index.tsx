import { replacePatch } from '@steambrew/client';
import Steam from './steam';
import logger from './logger.js';

// Steam calls `ClearAllToastNotifications` when it detects a fullscreen app is
// focused, ultimately preventing any Steam notifications from being displayed.
// This patch prevents that behaviour by making `ClearAllToastNotifications` a no-op.
replacePatch(Steam.NotificationStore, 'ClearAllToastNotifications', () => {
  return void 0;
});
logger.info('Patched `ClearAllToastNotifications`');

// Without the following, notifications leave space below for the taskbar, even
// when the app is fullscreen.
Steam.SystemUI.RegisterForFocusChangeEvents(async () => {
  // Reset the default monitor dimensions
  await Steam.FocusedAppWindowStore.QueryDefaultMonitorDimensions();

  // If there is a fullscreen window open, set the usable area to the full area
  const isFullScreen = await Steam.Window.DefaultMonitorHasFullscreenWindow();
  if (isFullScreen)
    Steam.FocusedAppWindowStore.m_defaultMonitor.m_usable =
      Steam.FocusedAppWindowStore.m_defaultMonitor.m_full;
});
logger.info('Added callback to `RegisterForFocusChangeEvents`');

export default function OnPluginStart() {}
