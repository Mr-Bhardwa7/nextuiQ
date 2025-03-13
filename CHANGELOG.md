# Changelog

All notable changes to NextuiQ will be documented in this file.

## [0.1.1] - 2025-03-14

### Changed

- Updated all components to use named exports instead of default exports
- Restructured component export patterns for better tree-shaking
- Modified build configuration for improved component packaging

### Fixed

- Resolved issue with Tailwind CSS styles not being included in exported components
- Updated vite.config.ts to properly handle CSS processing
- Fixed style bundling in the build output
- Corrected component import/export patterns

### Added

- New style.css file for global styles
- Showcase configuration for component demonstrations
- Enhanced component documentation

### Technical Updates

- Modified form components structure
- Updated story configurations
- Restructured component directories
- Enhanced TypeScript configurations
- Improved build system setup

### File Structure

- Removed src/components/index.ts
- Removed src/index.css
- Added src/style.css
- Added vite.showcase.config.ts

[0.1.1]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.1

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-03-12

### Added

- Initial release of NextuiQ
- Core components: Button, Card, Badge, Avatar etc.
- Form components: Input, Select, Checkbox, Radio, Toggle Switch, Phone Input, File Input, Dropbox Input
- Navigation components: Breadcrumb, Tabs, Dropdown
- Overlays: Modal, Popover
- Data Display components: Table, Alert, Loader
- Dark mode support
- TypeScript support
- Tailwind CSS integration
- Storybook documentation

### Changed

- N/A (Initial release)

### Deprecated

- N/A (Initial release)

### Removed

- N/A (Initial release)

### Fixed

- N/A (Initial release)

### Security

- N/A (Initial release)

[1.0.0]: https://github.com/t7ean/nextuiq/releases/tag/v1.0.0
