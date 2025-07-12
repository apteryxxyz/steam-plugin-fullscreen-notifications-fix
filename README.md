# Fullscreen Notifications Fix <a href='https://ko-fi.com/X8X554X28' target='_blank'>☕</a>

A Millennium plugin that fixes Steam notifications not appearing when a fullscreen non-Steam app is focused.

This plugin works by preventing Steam from automatically hiding notifications when a fullscreen application is detected and adjusts how Steam calculates usable screen space, preventing the taskbar gap.

## Prerequisites

- [Millennium](https://steambrew.app/)

## Notes & Troubleshooting

### Borderless Windowed Mode

In order for notifications to appear above the focused fullscreen window, the window must be set to borderless windowed mode. This setting can be usually be found in the games "Graphics", "Display", or "Video" settings.

> [!NOTE]
> Unfortunately, for some games - no matter the window mode - notifications will still not appear above the focused fullscreen window. This cannot be resolved by this plugin.
