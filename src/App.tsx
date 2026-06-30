import IconBed from "@/assets/images/icon-bed.svg?react"
import IconHouse from "@/assets/images/icon-house.svg?react"
import IconLocation from "@/assets/images/icon-pin.svg?react"
import IconBellOutline from "@/assets/images/icon-breakfast-outline.svg?react"
import IconMail from "@/assets/images/icon-mail.svg?react"
import Logo from "@/assets/images/logo.svg?react"
import IconWeather from "@/assets/images/icon-weather.svg?react"

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

const navItems = [
  { id: 0, label: "Your stay", icon: IconBed, count: 1 },
  { id: 1, label: "The house", icon: IconHouse, count: 0 },
  { id: 2, label: "Around town", icon: IconLocation, count: 0 },
  { id: 3, label: "Breakfast", icon: IconBellOutline, count: 0 },
  { id: 4, label: "Messages", icon: IconMail, count: 0 },
]

const DesktopNav = () => {
  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="p-4 pb-2">
        <Logo />
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

// const MobileNav = () => {
//   return <ul>Mobile Nav</ul>
// }

export function App() {
  return (
    <div className="flex min-h-dvh min-w-full bg-neutral-100">
      {/* Desktop Nav */}
      <div className="flex gap-2">
        <DesktopNav />
        <SidebarTrigger className="z-10" />
      </div>

      {/* flex: 1 = flex 1 1 0% which means start at size 0, grow to fill available space, and shrink if necessary
        <main>'s size depends on the size of the sidebar. If sidebar is open then <main> will shrink, If sidebar closes
        then <main> will grow. flex: 1 is making <main>'s size depend on the current sidebar size.
      */}
      <main className="flex-1 px-12">
        {/* Header */}
        <div>
          <p>Booking · Confirmed</p>
          <div>
            <p>
              Bienvenue, <span>Lucia.</span>
            </p>
            <div>
              <button>Print receipt</button>
              <button>Add to calendar</button>
            </div>
          </div>
        </div>

        <div>
          {/* Card 1 */}
          <div>
            <div>
              <div>
                <p>Receipt</p>
                <div>
                  <p>№ MS-2026</p>
                  <p>0421-AH</p>
                </div>
              </div>
              <p>Your stay</p>
            </div>

            <div>
              <div>
                <span>Check In</span>
                <span>25 Apr</span>
                <span>Saturday · 15:00</span>
              </div>
              <div>
                <span>Check Out</span>
                <span>29 Apr</span>
                <span>Wednesday · 11:00</span>
              </div>
            </div>

            <ul>
              <li>
                <span>Room · La Garrigue x 4 nights</span>
                <span>€ 620.00</span>
              </li>
              <div>
                <span>Breakfast x 2 guests</span>
                <span>€ 96.00</span>
              </div>
              <div>
                <span>Tourist tax</span>
                <span>€ 14.40</span>
              </div>
            </ul>

            <div>
              <div>
                <span>Total Paid</span>
                <span>€ 14.40</span>
              </div>

              <div>
                <span>Paid · Wise · GBP</span>
                <img src="/assets/images/icon-barcode.svg" alt="" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <span>Welcome Card</span>

            <div>
              <p>
                A note from your, <span>Margaux.</span>
              </p>
              <p>
                We're so glad you're coming. The shutters will be open, the
                lemonade cold, and the cat - Poivre - pretending not to notice
                you.
              </p>
            </div>

            <p>
              Room <span>La Garrigue</span>
            </p>
          </div>

          <span>
            <img src="/assets/images/icon-sparkle.svg" alt="" />
            Hover to Fan
            <img src="/assets/images/icon-sparkle.svg" alt="" />
          </span>
        </div>

        <div>
          <div>
            <div>
              <img src="/assets/images/icon-key.svg" alt="" />
              <span>Arrival</span>
            </div>
            <span>01</span>
          </div>

          <div>
            <div>
              <span>Check-in from 15:00</span>
              <span>Sat, 25 April</span>
            </div>
            <p>
              Ring the brass bell by the blue door. If we're at the market, the
              key is in the terracotta pot by the olive tree.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src="/assets/images/icon-key.svg" alt="" />
              <span>Arrival</span>
            </div>
            <span>01</span>
          </div>

          <div>
            <div>
              <span>Check-in from 15:00</span>
              <span>Sat, 25 April</span>
            </div>
            <p>
              Ring the brass bell by the blue door. If we're at the market, the
              key is in the terracotta pot by the olive tree.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src="/assets/images/icon-key.svg" alt="" />
              <span>Arrival</span>
            </div>
            <span>01</span>
          </div>

          <div>
            <div>
              <span>Check-in from 15:00</span>
              <span>Sat, 25 April</span>
            </div>
            <p>
              Ring the brass bell by the blue door. If we're at the market, the
              key is in the terracotta pot by the olive tree.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
