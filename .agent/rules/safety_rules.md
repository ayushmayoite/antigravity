# Antigravity Workspace Rules

## Safety & File Management

- **No File Deletion**: As a strict rule, no file shall be permanently deleted from the workspace.
- **Mandatory Backup**: Any file or directory that needs to be removed from the active codebase MUST be moved or copied to `e:\ourwebsite\backup` before removal.
- **Archive Structure**: Backups should be placed in descriptive subdirectories (e.g., `backup/old_components`, `backup/tobedone_archive`) to maintain organization.

## Hardware Acceleration

- **GPU/NPU Priority**: All visual and animation components should prefer hardware-accelerated properties (`translate3d`, `will-change`, `motion-gpu`).
- **WebGL Performance**: 3D viewers must use `powerPreference: "high-performance"`.
