'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const theme = {
    "root": {
        "base": "",
        "list": "flex items-center"
    },
    "item": {
        "base": "group flex items-center",
        "chevron": "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
        "href": {
            "off": "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
            "on": "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-red"
        },
        "icon": "mr-6 h-4 w-4"
    }
}

export default function DefaultBreadcrumb() {
  return (
    <Breadcrumb theme={{ theme }} aria-label="Default breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
>
      <Breadcrumb.Item
        href="#"
        icon={HiHome}
      >
        <p>
          Home
        </p>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Flowbite test
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}


