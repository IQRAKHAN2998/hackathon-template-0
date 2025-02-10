import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fake stats data (Replace this with actual database query)
    const stats = {
      totalOrders: 150,
      totalRevenue: 50000,
      totalProducts: 120,
      pendingOrders: 10,
    };

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
