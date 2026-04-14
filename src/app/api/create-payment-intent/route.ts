import { NextRequest, NextResponse } from "next/server";
import { SITE_CONFIG } from "@/lib/config";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { amount, paymentMethod, email, firstName, lastName, unitType, checkIn, checkOut } = body;

  // If Stripe is configured, create a real payment intent
  if (SITE_CONFIG.stripe.secretKey) {
    try {
      const Stripe = (await import("stripe")).default;
      const stripe = new Stripe(SITE_CONFIG.stripe.secretKey);

      if (paymentMethod === "guarantee") {
        // Setup intent for card-on-file (guarantee)
        const setupIntent = await stripe.setupIntents.create({
          payment_method_types: ["card"],
          metadata: {
            unitType,
            checkIn,
            checkOut,
            guestName: `${firstName} ${lastName}`,
            guestEmail: email,
          },
        });

        return NextResponse.json({
          clientSecret: setupIntent.client_secret,
          type: "setup",
        });
      } else {
        // Full payment intent
        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount * 100, // Stripe uses cents
          currency: "usd",
          payment_method_types: ["card"],
          metadata: {
            unitType,
            checkIn,
            checkOut,
            guestName: `${firstName} ${lastName}`,
            guestEmail: email,
          },
        });

        return NextResponse.json({
          clientSecret: paymentIntent.client_secret,
          type: "payment",
        });
      }
    } catch (error) {
      console.error("Stripe error:", error);
      return NextResponse.json(
        { error: "Error processing payment" },
        { status: 500 }
      );
    }
  }

  // Demo mode
  return NextResponse.json({
    success: true,
    type: "demo",
    message: "Stripe not configured. Demo booking confirmed.",
  });
}
