// src/components/ui/Icon.tsx
import React from 'react';
import * as FiIcons from 'react-icons/fi'; // Feather Icons
import * as HiIcons from 'react-icons/hi2'; // Heroicons v2
import * as BiIcons from 'react-icons/bi'; // Boxicons
import * as Io5Icons from 'react-icons/io5'; // Ionicons 5

// Allow both "fi:FiCheck" and "FiCheck" (and similar for other libraries)
type FiIconName = `fi:${string}` | `Fi${string}`;
type HiIconName = `hi:${string}` | `Hi${string}`;
type BiIconName = `bi:${string}` | `Bi${string}`;
type IoIconName = `io:${string}` | `Io${string}`;

// Combined icon name type
export type IconName = FiIconName | HiIconName | BiIconName | IoIconName;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  ariaHidden?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size = 24,
  ariaHidden = true
}) => {
  let library: string;
  let iconName: string;

  // Support both "fi:FiCheck" and "FiCheck"
  if (name.includes(':')) {
    [library, iconName] = name.split(':');
  } else if (name.startsWith('Fi')) {
    library = 'fi';
    iconName = name;
  } else if (name.startsWith('Hi')) {
    library = 'hi';
    iconName = name;
  } else if (name.startsWith('Bi')) {
    library = 'bi';
    iconName = name;
  } else if (name.startsWith('Io')) {
    library = 'io';
    iconName = name;
  } else {
    return null;
  }

  // Define icon styles
  const iconProps = {
    className,
    size,
    'aria-hidden': ariaHidden ? 'true' : undefined
  };

  // Return the appropriate icon from the selected library
  switch (library) {
    case 'fi': {
      // @ts-expect-error - dynamically accessing the icon
      const FeatherIcon = FiIcons[iconName];
      return FeatherIcon ? <FeatherIcon {...iconProps} /> : null;
    }
    case 'hi': {
      // @ts-expect-error - dynamically accessing the icon
      const HeroIcon = HiIcons[iconName];
      return HeroIcon ? <HeroIcon {...iconProps} /> : null;
    }
    case 'bi': {
      // @ts-expect-error - dynamically accessing the icon
      const BoxIcon = BiIcons[iconName];
      return BoxIcon ? <BoxIcon {...iconProps} /> : null;
    }
    case 'io': {
      // @ts-expect-error - dynamically accessing the icon
      const IoIcon = Io5Icons[iconName];
      return IoIcon ? <IoIcon {...iconProps} /> : null;
    }
    default:
      return null;
  }
};

export default Icon;