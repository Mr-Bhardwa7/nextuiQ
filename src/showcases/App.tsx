import { useState } from 'react'
import { 
  FiLayout, 
  FiBell, 
  FiUser, 
  FiUsers, 
  FiTag, 
  FiChevronDown, 
  FiChevronRight, 
  FiMaximize2, 
  FiImage, 
  FiGrid, 
  FiTablet, 
  FiNavigation,
  FiTable,
} from 'react-icons/fi'
import ButtonShowcase from '@/showcases/ui/ButtonShowcase'
import AlertShowcase from '@/showcases/ui/AlertShowcase'
import AvatarShowcase from '@/showcases/ui/AvatarShowcase'
import AvatarTextShowcase from '@/showcases/ui/AvatarTextShowcase'
import BadgeShowcase from '@/showcases/ui/BadgeShowcase'
import DropdownShowcase from '@/showcases/ui/DropdownShowcase'
import ModalShowcase from '@/showcases/ui/ModalShowcase'
import TableShowcase from '@/showcases/ui/TableShowcase';
import ResponsiveImageShowcase from '@/showcases/ui/ResponsiveImageShowcase'
import GridShowcase from '@/showcases/ui/GridShowcase';
import TabsShowcase from '@/showcases/ui/TabsShowcase'
import BreadcrumbShowcase from '@/showcases/ui/BreadcrumbShowcase'
import Header from '@/components/ui/header';

import FormShowcase from '@/showcases/forms/FormShowcase'
import FormElementsShowcase from '@/showcases/forms/FormElementsShowcase'

type ComponentType = 
  | 'ui/button' 
  | 'ui/alert' 
  | 'ui/avatar' 
  | 'ui/avatar-text' 
  | 'ui/badge' 
  | 'ui/dropdown' 
  | 'ui/dropdown-item' 
  | 'ui/modal'
  | 'ui/table'
  | 'ui/responsive-image'
  | 'ui/grid'
  | 'ui/tabs'
  | 'ui/breadcrumb'
  | 'ui/header'
  | 'forms/form'
  | 'forms/elements';

function App() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentType>('ui/button')
  const [isUIOpen, setIsUIOpen] = useState(true)
  const [isFormOpen, setIsFormOpen] = useState(true)

  // Add to renderComponentShowcase
  const renderComponentShowcase = () => {
    switch (selectedComponent) {
      case 'ui/button':
        return <ButtonShowcase />
      case 'ui/alert':
        return <AlertShowcase />
      case 'ui/avatar':
        return <AvatarShowcase />
      case 'ui/avatar-text':
        return <AvatarTextShowcase />
      case 'ui/badge':
        return <BadgeShowcase />
      case 'ui/dropdown':
        return <DropdownShowcase />
      case 'ui/modal':
        return <ModalShowcase />
      case 'ui/table':
        return <TableShowcase />
      case 'ui/responsive-image':
        return <ResponsiveImageShowcase />
      case 'ui/grid':
        return <GridShowcase />;
      case 'ui/tabs':
        return <TabsShowcase />;
      case 'ui/breadcrumb':
        return <BreadcrumbShowcase />
      case 'forms/form':
        return <FormShowcase />
      case 'forms/elements':
        return <FormElementsShowcase />
      default:
        return null
    }
  }

  // Add to sidebarItems
  const sidebarItems = {
    ui: {
      label: 'UI',
      items: [
        { id: 'ui/button', label: 'Button', icon: <FiLayout /> },
        { id: 'ui/alert', label: 'Alert', icon: <FiBell /> },
        { id: 'ui/avatar', label: 'Avatar', icon: <FiUser /> },
        { id: 'ui/avatar-text', label: 'Avatar Text', icon: <FiUsers /> },
        { id: 'ui/badge', label: 'Badge', icon: <FiTag /> },
        { id: 'ui/dropdown', label: 'Dropdown', icon: <FiChevronDown /> },
        { id: 'ui/modal', label: 'Modal', icon: <FiMaximize2 /> },
        { id: 'ui/table', label: 'Table', icon: <FiTable /> },
        { id: 'ui/responsive-image', label: 'Responsive Image', icon: <FiImage /> },
        { id: 'ui/grid', label: 'Grid', icon: <FiGrid /> },
        { id: 'ui/tabs', label: 'Tabs', icon: <FiTablet /> },
        { id: 'ui/breadcrumb', label: 'Breadcrumb', icon: <FiNavigation /> },
      ]
    },
    form: {
      label: 'Forms',
      items: [
         { id: 'forms/form', label: 'Form', icon: <FiLayout /> },
        { id: 'forms/elements', label: 'Form Elements', icon: <FiLayout /> },
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />
      <div className="flex">
        <aside className="w-64 border-r border-slate-200 dark:border-slate-700 min-h-[calc(100vh-73px)] bg-white dark:bg-slate-800 p-4">
          <nav>
            <div className="mb-4">
              <h2 className="px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Components</h2>
            </div>
            <div className="space-y-1">
              {Object.entries(sidebarItems).map(([key, section]) => (
                <div key={key}>
                  <button
                    onClick={() => key === 'ui' ? setIsUIOpen(!isUIOpen) : setIsFormOpen(!isFormOpen)}
                    className="w-full text-left px-4 py-2 rounded-md flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                  >
                    {(key === 'ui' ? isUIOpen : isFormOpen) ? 
                      <FiChevronDown className="shrink-0" /> : 
                      <FiChevronRight className="shrink-0" />
                    }
                    <span>{section.label}</span>
                  </button>
                  {(key === 'ui' ? isUIOpen : isFormOpen) && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => setSelectedComponent(item.id as ComponentType)}
                            className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${
                              selectedComponent === item.id
                                ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                            }`}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-8 bg-slate-50 dark:bg-slate-900">
          {renderComponentShowcase()}
        </main>
      </div>
    </div>
  )
}

export default App
