# Changelog

## [0.1.6-beta.0] - 2024-03-20

### Added

- **New Components:**
  - OTPInput component for entering verification codes
  - Button icons to provide enhanced visual feedback
- **New Hooks:**
  - useBreakpoint hook to manage responsive design
- **Example**:
  - New pages example added into theme example

### Enhanced

- **Form Components:**
  - Improved Checkbox component for better accessibility
  - Enhanced MultiSelect functionality
  - Updated SearchableSelect with improved filtering
  - Refined base structure of Input component

### Documentation

- Updated README to include new component documentation
- Added new component stories
- Enhanced button documentation with icon usage examples
- Improved documentation for form elements

### Technical

- Updated package.json configurations
- Enhanced build system with more efficient bundle analysis
- Improved component exports in index.ts
- Updated vite configuration for optimized performance

[0.1.6-beta.0]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.6-beta.0

## [0.1.5-beta.0] - 2024-03-19

### Build Optimizations

- Reduced bundle size by implementing code splitting and tree shaking
- Added bundle analysis visualization using rollup-plugin-visualizer
- Optimized CSS output by disabling code splitting (cssCodeSplit: false)
- Implemented proper asset file naming for consistent builds
- Added terser optimization for better code minification
- Excluded example folders from production build
- Removed unused SVG assets from public directory

### Theme Provider Improvements

- Improved theme provider performance
- Optimized theme provider initialization
- Added proper type exports for theme components

### Package Configuration

- Updated exports field in package.json for better CSS handling
- Improved type definitions generation
- Added proper side effects declaration for CSS and TSX files
- Streamlined external dependencies configuration

### Developer Experience

- Added bundle analysis HTML report for better build insights
- Improved build error reporting
- Updated example project structure for better demonstration

[0.1.5-beta.0]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.5-beta.0

## [0.1.4-beta.0] - 2024-03-17

### Added

- New UI Components:
  - Dialog component with header, content, footer, and close button — ideal for modal-based interactions.
  - Multi-step component for wizard-like interfaces — useful for guided user flows.
  - Popover component with trigger and content — great for contextual overlays.
  - Tooltip component with customizable positioning — enhances user feedback.

### Changed

- Updated Storybook configuration and preview settings for improved consistency.
- Enhanced form elements input component for better accessibility and styling.
- Expanded main exports in `index.ts` to include new components.
- Updated package documentation and license to reflect recent changes.

### Technical

- Ensured all new components have TypeScript type definitions.
- Verified compatibility with existing theming and styling.
- Conducted basic accessibility (a11y) checks for all new components.

[0.1.4-beta.0]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.4-beta.0

## [0.1.3] - 2024-03-15

### Added

- New SearchableSelect component with search functionality
- System theme support in ThemeContext
- Storybook theme switcher (Light/Dark/System)
- Responsive viewport presets in Storybook
- Better theme handling across all components
- New theme example implementation
- Improved theme toggle functionality
- Better dark mode support

### Changed

- Updated all form components to use new theme tokens
- Improved Storybook configuration and preview settings
- Enhanced table components with better styling and accessibility
- Unified styling approach across all UI components
- Better dark mode support in all components
- Modernized dropdown components
- Improved modal and card stories
- Updated package.json metadata (keywords, repository, bugs, author, homepage)

### Fixed

- Theme persistence and system theme detection
- Form components accessibility issues
- Table pagination and filtering improvements
- Dropdown positioning and styling
- Modal responsiveness
- Grid system flexibility
- Theme context hydration issues
- Storybook configuration and preview setup
- Component styling inconsistencies

### Moved

- Form components to new directory structure
- Example implementations to dedicated folders

### Removed

- Deprecated form examples and unused components
- Legacy form element implementations
- Outdated showcase components

### Technical

- Updated component architecture for better theme support
- Improved TypeScript types across components
- Better props organization in form components
- Enhanced story documentation
- Standardized component styling approach

### Dependencies

- Updated React to version 19
- Updated Storybook to version 8.6.4
- Updated TailwindCSS and related packages

[0.1.3]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.3

## [0.1.2] - 2024-03-14

### Added

- Theme example project showcasing theme implementation
- Enhanced theme context with system preference detection
- CSS variable-based theming system
- Color palette customization support
- Smooth theme transitions
- New ThemeToggle component with CSS variable support

### Changed

- Updated ThemeContext to use CSS variables
- Improved theme toggle functionality
- Enhanced theme persistence with localStorage
- Updated package dependencies
- Refactored ThemeToggle component to use theme CSS variables
- Enhanced ThemeToggle styling with semantic color tokens

### Documentation

- Added theme implementation example
- Created theme customization guide
- Added example project setup instructions
- Added ThemeToggle component usage documentation

[0.1.2]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.2

## [0.1.1] - 2025-03-13

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

[0.1.0]: https://github.com/t7ean/nextuiq/releases/tag/v0.1.0
