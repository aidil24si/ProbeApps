import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container" className="flex items-center justify-between bg-white px-10 py-4 shadow-sm">
            {/* Search Bar */}
            <div id="search-bar" className="relative flex w-1/2 items-center">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                    className="w-full rounded-xl bg-gray-50 py-3 pl-4 pr-12 outline-none focus:ring-2 focus:ring-hijau/20"
                />
                <FaSearch id="search-icon" className="absolute right-4 text-gray-400" />
            </div>

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center gap-8">
                {/* Action Icons */}
                <div className="flex items-center gap-4">
                    <div id="notification-icon" className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-biru/10 text-biru">
                        <FaBell size={20} />
                        <span id="notification-badge" className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-hijau text-[10px] font-bold text-white border-2 border-white">
                            50
                        </span>
                    </div>
                    <div id="chart-icon" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-xl">
                        <FcAreaChart />
                    </div>
                    <div id="settings-icon" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-400 text-xl">
                        <SlSettings />
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="h-10 w-[1px] bg-gray-200"></div>

                {/* Profile Section */}
                <div id="profile-container" className="flex items-center gap-4">
                    <span id="profile-text" className="text-sm">
                        Hello, <b className="font-poppins text-gray-900">Aidil Ikhsan</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src="img/Aidil.jpg"
                        alt="Profile Avatar"
                        className="h-12 w-12 rounded-full border-2 border-hijau object-cover p-0.5"
                    />
                </div>
            </div>
        </div>
    );
}