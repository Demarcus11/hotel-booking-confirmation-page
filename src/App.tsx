import { useState, useEffect } from "react"

import IconBed from "@/assets/images/icon-bed.svg?react"
import IconHouse from "@/assets/images/icon-house.svg?react"
import IconLocation from "@/assets/images/icon-pin.svg?react"
import IconBellOutline from "@/assets/images/icon-breakfast-outline.svg?react"
import IconMail from "@/assets/images/icon-mail.svg?react"
import Logo from "@/assets/images/logo.svg?react"
import IconWeather from "@/assets/images/icon-weather.svg?react"
import IconMenu from "@/assets/images/icon-menu.svg?react"
import IconSun from "@/assets/images/icon-sun.svg?react"
import IconBarcode from "@/assets/images/icon-barcode.svg?react"
import IconSparkle from "@/assets/images/icon-sparkle.svg?react"
import IconKey from "@/assets/images/icon-key.svg?react"
import IconWifi from "@/assets/images/icon-wifi.svg?react"
import IconBell from "@/assets/images/icon-breakfast.svg?react"
import { CheckIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuBadge,
  SidebarGroup,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"

import { Button } from "@/components/ui/button"

const navItems = [
  { id: 0, label: "Your stay", icon: IconBed, count: 1 },
  { id: 1, label: "The house", icon: IconHouse, count: 0 },
  { id: 2, label: "Around town", icon: IconLocation, count: 0 },
  { id: 3, label: "Breakfast", icon: IconBellOutline, count: 0 },
  { id: 4, label: "Messages", icon: IconMail, count: 0 },
]

const AppSidebar = () => {
  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="p-4 pb-2">
        <a href="#" className="w-fit">
          <Logo />
        </a>
        <Separator decorative={true} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="px-4">
          <SidebarMenu>
            {navItems.map(({ id, label, icon: Icon, count }) => (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton
                  size="lg"
                  className="hover:bg-neutral-200 [&_svg]:size-5"
                >
                  <Icon />
                  <span>{label}</span>
                  {count > 0 && (
                    <SidebarMenuBadge className="right-4 h-4 min-w-4 rounded-full bg-terracotta-600 font-serif text-xs text-[10px] font-light text-neutral-0">
                      {count}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 text-neutral-900">
        <div className="relative mb-2 flex flex-col gap-2 overflow-clip rounded-xl bg-sun-200 px-4 py-3 drop-shadow-md">
          <IconWeather className="absolute -top-5 -right-5" />
          <p className="font-mono text-xs uppercase">Today In Cassis</p>
          <span className="font-serif text-3xl">27°</span>
          <span className="text-sm">Sunny · light breeze</span>
        </div>

        <Separator
          decorative={true}
          className="border-t border-dashed border-neutral-300 bg-transparent"
        />

        <div className="flex flex-col gap-2 font-mono text-[10px] text-neutral-600 uppercase">
          <p>Est. 1987</p>
          <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
          <p> © 2026 Maison Soleil</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

const MobileNav = () => {
  return (
    <>
      <SidebarContent>
        <SidebarGroup className="px-4">
          <SidebarMenu>
            {navItems.map(({ id, label, icon: Icon, count }) => (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton
                  size="lg"
                  className="hover:bg-neutral-200 [&_svg]:size-5"
                >
                  <Icon />
                  <span>{label}</span>
                  {count > 0 && (
                    <SidebarMenuBadge className="right-4 h-4 min-w-4 rounded-full bg-terracotta-600 font-serif text-xs text-[10px] font-light text-neutral-0">
                      {count}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 text-neutral-900">
        <div className="relative mb-2 flex flex-col gap-2 overflow-clip rounded-xl bg-sun-200 px-4 py-3 drop-shadow-md">
          <IconWeather className="absolute -top-5 -right-5" />
          <p className="font-mono text-xs uppercase">Today In Cassis</p>
          <span className="font-serif text-3xl">27°</span>
          <span className="text-sm">Sunny · light breeze</span>
        </div>

        <Separator
          decorative={true}
          className="border-t border-dashed border-neutral-300 bg-transparent"
        />

        <div className="flex flex-col gap-2 font-mono text-[10px] text-neutral-600 uppercase">
          <p>Est. 1987</p>
          <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
          <p> © 2026 Maison Soleil</p>
        </div>
      </SidebarFooter>
    </>
  )
}

export function App() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  // close the mobile menu if the screen resizes to lg
  useEffect(() => {
    const media = window.matchMedia("(min-width: 56rem)")

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpen(false)
      }
    }

    media.addEventListener("change", handleChange)

    return () => media.removeEventListener("change", handleChange)
  }, [])

  return (
    <div className="flex min-h-dvh min-w-full flex-col bg-neutral-100 lg:flex-row">
      {/* Sidebar */}
      <div className="hidden gap-2 lg:flex">
        <AppSidebar />
        <SidebarTrigger className="z-10" />
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between border-b border-neutral-400 p-4">
          <a href="#">
            <Logo />
          </a>
          <button
            className="grid aspect-square w-8 place-content-center rounded outline outline-neutral-400 hover:opacity-50"
            onClick={() => setOpen((e) => !e)}
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {/* flex: 1 = flex 1 1 0% which means start at size 0, grow to fill available space, and shrink if necessary
        <main>'s size depends on the size of the sidebar. If sidebar is open then <main> will shrink, If sidebar closes
        then <main> will grow. flex: 1 is making <main>'s size depend on the current sidebar size.
      */}
      {open ? (
        <div>
          <MobileNav />
        </div>
      ) : (
        <main className="mt-4 flex-1 px-4 pb-20 sm:text-center lg:px-12">
          {/* Header */}
          <div>
            <p className="font-mono text-xs text-neutral-600 uppercase">
              Booking · Confirmed
            </p>
            <div className="mt-2">
              <p className="font-serif text-4xl">
                Bienvenue,{" "}
                <span className="text-terracotta-500 italic">Lucia.</span>
              </p>
              <div className="mt-6 flex items-center gap-4 sm:justify-center">
                <Button
                  className="rounded-full px-8 py-4.5 text-xs"
                  variant="outline"
                >
                  Print receipt
                </Button>
                <Button className="rounded-full px-8 py-4.5 text-xs">
                  Add to calendar
                </Button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="cards mt-12">
            {/* Card 1 */}
            <div className="card-receipt mt-2 -rotate-2 rounded-2xl bg-neutral-0 p-6 shadow-lg">
              <div className="flex flex-col border-b border-dashed border-neutral-400 pb-4">
                <div className="flex items-start justify-between">
                  <p className="font-mono text-[12px] uppercase">Receipt</p>
                  <div className="font-mono text-[12px]">
                    <p>№ MS-2026</p>
                    <p className="text-right">0421-AH</p>
                  </div>
                </div>
                <p className="-mt-4 font-serif text-xl font-semibold">
                  Your stay
                </p>
              </div>

              <div className="mt-4 flex justify-between border-b border-dashed border-neutral-400 pb-4 text-center">
                <div>
                  <span className="font-mono text-[10px] uppercase">
                    Check In
                  </span>
                  <span className="block font-serif text-3xl">25 Apr</span>
                  <span className="font-mono text-[10px]">
                    Saturday · 15:00
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase">
                    Check Out
                  </span>
                  <span className="block font-serif text-3xl">29 Apr</span>
                  <span className="font-mono text-[12px]">
                    Wednesday · 11:00
                  </span>
                </div>
              </div>

              <ul className="mt-4 grid gap-2 border-b border-neutral-700 pb-4">
                <li className="flex items-center justify-between text-[14px]">
                  <span>Room · La Garrigue &times; 4 nights</span>
                  <span>€ 620.00</span>
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  <span>Breakfast &times; 2 guests</span>
                  <span>€ 96.00</span>
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  <span>Tourist tax</span>
                  <span>€ 14.40</span>
                </li>
              </ul>

              <div className="mt-4 grid gap-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[14px] uppercase">
                    Total Paid
                  </span>
                  <span className="font-serif text-xl">€ 730.40</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase">
                    Paid · Wise · GBP
                  </span>
                  <IconBarcode />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-welcome relative z-10 rotate-2 rounded-2xl bg-linear-to-bl from-terracotta-400 to-terracotta-700 p-6 text-neutral-0 shadow-lg shadow-terracotta-700">
              <IconSun className="absolute top-10 right-6" />
              <div className="border-t border-dashed border-neutral-400 pt-4">
                <p className="font-mono text-xs text-neutral-400 uppercase">
                  Welcome Card
                </p>
              </div>

              <div className="mt-15">
                <p className="font-serif text-lg text-sun-200 italic">
                  A note from your host,{" "}
                  <span className="mt-2 block text-4xl text-neutral-0">
                    Margaux.
                  </span>
                </p>
                <p className="mt-8 text-xs leading-5">
                  We're so glad you're coming. The shutters will be open, the
                  lemonade cold, and the cat - Poivre - pretending not to notice
                  you.
                </p>
              </div>

              <p className="mt-15 font-mono text-[10px] uppercase">
                Room{" "}
                <span className="block font-serif text-lg capitalize">
                  La Garrigue
                </span>
              </p>
            </div>

            <div className="hidden">
              <IconSparkle />
              Hover to Fan
              <IconSparkle />
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-15 grid gap-4">
            <div className="rounded-xl bg-neutral-0 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-terracotta-700 p-1.5">
                    <IconKey />
                  </div>
                  <span className="font-mono text-xs font-medium tracking-widest text-terracotta-700 uppercase">
                    Arrival
                  </span>
                </div>
                <span className="font-serif text-xl text-terracotta-700">
                  01
                </span>
              </div>

              <div className="mt-4">
                <p className="font-serif text-xl">Check-in from 15:00</p>
                <p className="mt-1 text-[10px]">Sat, 25 April</p>
                <p className="mt-4 text-xs">
                  Ring the brass bell by the blue door. If we're at the market,
                  they key is in the terracotta pot by the olive tree.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-neutral-0 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-blue-500 p-1.5">
                    <IconWifi />
                  </div>
                  <span className="font-mono text-xs font-medium tracking-widest text-blue-500 uppercase">
                    Wifi
                  </span>
                </div>
                <span className="font-serif text-xl text-blue-500">02</span>
              </div>

              <div className="mt-4">
                <p className="font-serif text-xl">Le Soleil · Guest</p>
                <p className="mt-1 text-[10px]">Password below</p>
                <div className="mt-4 grid gap-1">
                  <div className="flex items-center justify-between rounded bg-neutral-200 p-2 text-[12px]">
                    <span className="font-mono tracking-widest uppercase">
                      Network
                    </span>
                    <span>Le Soleil · Guest</span>
                  </div>
                  <div className="flex items-center justify-between rounded bg-neutral-200 p-2 text-[12px]">
                    <span className="font-mono tracking-widest uppercase">
                      Password
                    </span>
                    <div className="flex items-center gap-2">
                      <span>soleil-2026</span>
                      <Button
                        variant="ghost"
                        className="font-mono text-[10px] text-neutral-600 uppercase hover:bg-transparent hover:underline"
                        onClick={() => handleCopy("soleil-2026")}
                      >
                        {copied ? <CheckIcon /> : "Copy"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-neutral-0 p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-rose-700 p-1.5">
                    <IconBell />
                  </div>
                  <span className="font-mono text-xs font-medium tracking-widest text-rose-700 uppercase">
                    Breakfast
                  </span>
                </div>
                <span className="font-serif text-xl text-rose-700">03</span>
              </div>

              <div className="mt-4">
                <p className="font-serif text-xl">Served 8-10:30</p>
                <p className="mt-1 text-[10px]">On the terrace</p>
                <p className="mt-4 text-xs">
                  Fresh figs, Marseille honey, pain au levain, and esperesso.
                  Gluten-free option? Leave a note the night before.
                </p>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default App
