import React from "react";
import {
  Gamepad,
  Search,
  PlusCircle,
  Crown,
  HelpCircle,
  Send,
  Mail,
  Gift,
  Trophy,
  Megaphone,
  Coins,
} from "lucide-react";

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M20.317 4.369A19.791 19.791 0 0016.945 3a13.05 13.05 0 00-.664 1.376 17.87 17.87 0 00-5.137 0A13.05 13.05 0 009.48 3 19.8 19.8 0 005.683 4.37C3.125 9.11 2.188 13.63 2.676 18.09a20.171 20.171 0 005.99 2.995c.464-.637.876-1.31 1.238-2.016-1.95-.577-3.446-1.576-3.446-1.576s.29.161.79.371c1.434.657 2.468 1.019 3.19 1.225a12.96 12.96 0 005.37-.02c.72-.206 1.754-.569 3.19-1.226.5-.21.79-.371.79-.371s-1.495.999-3.446 1.576c.362.706.774 1.379 1.238 2.016a20.169 20.169 0 005.99-2.995c.5-4.46-.45-8.98-3.008-13.72zM8.02 15.182c-1.003 0-1.826-.92-1.826-2.054 0-1.133.81-2.053 1.826-2.053 1.03 0 1.834.924 1.807 2.053 0 1.134-.777 2.054-1.807 2.054zm5.31 0c-1.003 0-1.826-.92-1.826-2.054 0-1.133.81-2.053 1.826-2.053 1.03 0 1.835.924 1.807 2.053 0 1.134-.778 2.054-1.807 2.054z" />
  </svg>
);

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Gamepad className="w-6 h-6 text-indigo-400" />
              <h3 className="text-white text-lg font-semibold">Steam Family</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The premier platform for sharing Steam accounts securely. Discover new games and build your library together.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/browse" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <Search className="w-4 h-4 text-indigo-300" /> Browse Accounts
                </a>
              </li>
              <li>
                <a href="/submit" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <PlusCircle className="w-4 h-4 text-indigo-300" /> Submit Account
                </a>
              </li>
              <li>
                <a href="/earn" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                  <Coins className="w-4 h-4 text-indigo-300" /> Earn Coins
                </a>
              </li>
              <li>
                <a href="/premium" className="flex items-center gap-3 text-yellow-300 hover:text-foreground transition">
                  <Crown className="w-4 h-4" /> Premium
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="/faq" className="flex items-center gap-3 hover:text-foreground transition">
                  <HelpCircle className="w-4 h-4 text-teal-300" /> FAQ
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-foreground transition">Launcher Bypasses</a>
              </li>
              <li>
                <a href="/faq" className="hover:text-foreground transition">Steam Error Codes</a>
              </li>
              <li>
                <a href="mailto:contact@steamfamily.xyz" className="flex items-center gap-3 hover:text-foreground transition">
                  <Mail className="w-4 h-4 text-emerald-400" /> contact@steamfamily.xyz
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Community */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="https://t.me/Steam_Family" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition">
                  <Send className="w-4 h-4 text-sky-400" /> Telegram Channel
                </a>
              </li>
              <li>
                <a href="https://discord.gg/3w69MWQcuX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition">
                  <DiscordIcon className="w-4 h-4 text-indigo-400" /> Discord Server
                </a>
              </li>
              <li>
                <a href="/giveaways" className="flex items-center gap-3 hover:text-foreground transition">
                  <Gift className="w-4 h-4 text-green-300" /> Giveaways
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="flex items-center gap-3 hover:text-foreground transition">
                  <Trophy className="w-4 h-4 text-yellow-400" /> Leaderboard
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Follow Us</span>

            <div className="flex items-center gap-3">
              <a href="https://t.me/Steam_Family" aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <Send className="w-5 h-5 text-sky-400" />
              </a>

              <a href="https://discord.gg/3w69MWQcuX" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <DiscordIcon className="w-5 h-5 text-indigo-400" />
              </a>

              <a href="mailto:contact@steamfamily.xyz" aria-label="Email" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <Mail className="w-5 h-5 text-emerald-400" />
              </a>

              <a href="https://linktr.ee/mehdibld" aria-label="Advertise" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <Megaphone className="w-5 h-5 text-rose-400" />
              </a>

              <a href="/premium" aria-label="Buy Pro" className="p-2 rounded-md border border-yellow-600 bg-yellow-600/10 hover:bg-yellow-600 hover:text-black transition">
                <Crown className="w-5 h-5 text-yellow-400" />
              </a>
            </div>
          </div>

          <div className="mt-2 md:mt-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="/terms" className="hover:text-foreground transition">Terms & Rules</a>
              <a href="/faq" className="hover:text-foreground transition">FAQ</a>
              <a href="/premium" className="hover:text-foreground transition">Buy Pro</a>
              <a href="mailto:contact@steamfamily.xyz" className="hover:text-foreground transition">contact@steamfamily.xyz</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <p className="text-center text-sm text-muted-foreground">© {year} Steam Family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
