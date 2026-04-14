import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/config";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { unitType, checkIn, checkOut } = body;

  // If Cloudbeds is configured, check real availability
  if (SITE_CONFIG.cloudbeds.apiKey && SITE_CONFIG.cloudbeds.propertyId) {
    try {
      const url = new URL(
        `${SITE_CONFIG.cloudbeds.baseUrl}/getAvailability`
      );
      url.searchParams.set("propertyID", SITE_CONFIG.cloudbeds.propertyId);
      url.searchParams.set("startDate", checkIn);
      url.searchParams.set("endDate", checkOut);

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${SITE_CONFIG.cloudbeds.apiKey}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        // Map unit types to Cloudbeds room type IDs
        // TODO: Configure room type mapping after Cloudbeds setup
        const available = data.success && data.data?.some(
          (room: { roomsAvailable: number; roomTypeName: string }) =>
            room.roomsAvailable > 0 &&
            (unitType === "studio"
              ? room.roomTypeName.toLowerCase().includes("studio")
              : room.roomTypeName.toLowerCase().includes("2") ||
                room.roomTypeName.toLowerCase().includes("dos"))
        );

        return NextResponse.json({ available, source: "cloudbeds" });
      }
    } catch (error) {
      console.error("Cloudbeds API error:", error);
    }
  }

  // Fallback: demo mode — always available
  return NextResponse.json({
    available: true,
    source: "demo",
    message: "Cloudbeds not configured. Showing demo availability.",
  });
}
