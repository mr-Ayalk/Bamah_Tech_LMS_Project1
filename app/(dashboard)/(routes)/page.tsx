'use client'

import { UserButton } from '@clerk/nextjs'

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

export default function Home() {
  return (
    <header>
      <UserButton afterSignOutUrl='/'>
        <UserButton.MenuItems>
          <UserButton.Action
            label="Open chat"
            labelIcon={<DotIcon />}
            onClick={() => alert('init chat')}
          />
           <UserButton.Action
            label="Teacher Mode"
            labelIcon={<DotIcon />}
            onClick={() => alert('init chat')}
          />
        </UserButton.MenuItems>
        
      </UserButton>
    </header>
  )
}