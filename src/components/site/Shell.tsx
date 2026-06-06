'use client'
/* Shell.tsx — the shared site frame: social bar, nav, footer, and the order modal,
   with an OrderContext so any descendant can open the modal (mirrors the design
   bundle's PageFrame / OrderCtx). Wraps every page from the root layout. */
import { createContext, useContext, useState, type ReactNode } from 'react'
import { SocialBar } from './atoms'
import { Nav } from './Nav'
import { Footer, OrderModal } from './Contact'

const OrderContext = createContext<() => void>(() => {})
export function useOrder() { return useContext(OrderContext) }

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openOrder = () => setOpen(true)
  return (
    <OrderContext.Provider value={openOrder}>
      <div className="kit-root">
        <SocialBar />
        <Nav onOrder={openOrder} />
        <main className="kit-main">{children}</main>
        <Footer />
        <OrderModal open={open} onClose={() => setOpen(false)} />
      </div>
    </OrderContext.Provider>
  )
}
