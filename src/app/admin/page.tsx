import SideBar from "./sidebar/page";

export default function AdminProfile() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar - Sticky */}
      <div className="w-64 bg-gray-800 text-white p-4 fixed h-full">
        <SideBar />
      </div>

      {/* Right Content Area */}
      <div className="ml-64 w-full p-6">
        <h1 className="text-2xl font-bold">Admin Profile</h1>
        <p>Welcome to the admin dashboard! Here you can manage your orders, products, and users.</p>
      </div>
    </div>
  );
}
