'use client'

import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import * as Popover from '@radix-ui/react-popover'

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger>
      <Bars3Icon className={'w-8 text-red-600'} />
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        sideOffset={8}
        className={
          'bg-white data-[state=open]:animate-[fade-in-popover_200ms] data-[state=closed]:animate-[fade-out-popover_200ms] border-red-600 border p-8'
        }
      >
        <p className={' text-gray-500'}>Kommer snart...</p>
        <Popover.Arrow className={'fill-red-600'} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
)

export default PopoverDemo
