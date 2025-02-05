"use client";
import React, { useState } from "react";

type ShipmentDetails = {
  orderId: string;
  trackingNumber: string;
};

type TrackingData = {
  trackingDetails: {
    tracking_number: string;
    carrier: string;
    status: string;
    eta: string | null;
  };
};

const ShippoData = () => {
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackShipment = async () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number");
      return;
    }

    setIsTracking(true);
    try {
      const carrier = "shippo";
      const orderId = shipmentDetails?.orderId;
      const response = await fetch("/api/liveTracking/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingNumber, carrier, orderId }),
      });

      const data = await response.json();
      if (response.ok && data?.trackingDetails) {
        setTrackingData(data);
      } else {
        setTrackingData(null);
      }
    } catch (error) {
      console.log("Error fetching tracking status:", error);
      setTrackingData(null);
    } finally {
      setIsTracking(false);
    }
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/shippoOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: "ORDER12345", // Placeholder orderId
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setShipmentDetails({
          orderId: data.orderId,
          trackingNumber: data.trackingNumber,
        });
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8 flex flex-col justify-center items-center">
      {/* Checkout Button */}
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-600">
        <button onClick={handleCheckout} className="bg-blue-500 text-white w-full p-2 mt-4 rounded-md">
          Place Order
        </button>
      </div>

      {/* Shipment Details */}
      {shipmentDetails && (
        <div className="mt-8 bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold">Shipment Details</h3>
          <p>Order ID: {shipmentDetails.orderId}</p>
          <p>Tracking Number: {shipmentDetails.trackingNumber || "Tracking information is not available yet."}</p>
        </div>
      )}

      {/* Track Shipment */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg shadow-gray-600">
        <h1 className="text-2xl font-bold mb-4">Track Your Shipment</h1>
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Enter Tracking Number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="p-2 border rounded-md w-full"
          />
          <button
            onClick={handleTrackShipment}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Track
          </button>
        </div>

        {isTracking && <p className="text-gray-500">Loading...</p>}

        {trackingData && trackingData.trackingDetails && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Shipment Tracking Details</h2>
            <p><strong>Tracking Number:</strong> {trackingData.trackingDetails.tracking_number}</p>
            <p><strong>Carrier:</strong> {trackingData.trackingDetails.carrier}</p>
            <p><strong>Status:</strong> {trackingData.trackingDetails.status}</p>
            <p><strong>ETA:</strong> {trackingData.trackingDetails.eta || "N/A"}</p>
          </div>
        )}
        {!trackingData && !isTracking && (
          <p className="text-gray-500">Enter a tracking number to see shipment details.</p>
        )}
      </div>
    </div>
  );
};

export default ShippoData;
