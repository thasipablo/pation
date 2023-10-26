"use client"

import { ChevronsLeft } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts"

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px")
  
  const isResizingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRref = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)

  return ( 
    <>
      <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div
          role="button"
          className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <p>Action items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
      </aside>
    </>
  );
}
 
export default Navigation;
