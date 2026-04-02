"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Loader2, Camera } from "lucide-react";

declare global {
  interface Window {
    puter: any;
  }
}

const Examples = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    const initCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraReady(true);
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Could not access camera. Please allow camera permissions.");
      }
    };

    initCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleDescribe = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsLoading(true);
    setDescription(null);
    setError(null);

    try {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (!context) {
        throw new Error("Could not get canvas context");
      }

      // Match canvas dimensions to the video resolution for better quality
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL("image/png");

      if (typeof window !== "undefined" && window.puter?.ai?.chat) {
        const response = await window.puter.ai.chat("Describe this image", imageData);
        // Extract string explicitly to avoid React object rendering errors
        const text = typeof response === 'string' ? response : (response?.message?.content || response?.message || response.toString());
        setDescription(text);
      } else {
        throw new Error("Puter AI script not loaded yet. Please try again.");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Error in getting description");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 space-y-8 w-full max-w-2xl mx-auto">
      <Script src="https://js.puter.com/v2/" strategy="lazyOnload" />

      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Image Description App
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Capture a photo and let AI describe it for you instantly.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm aspect-video w-full flex items-center justify-center">
        {!isCameraReady && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="w-8 h-8 animate-spin" />
            <span className="text-sm font-medium">Starting camera...</span>
          </div>
        )}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover ${
            !isCameraReady ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        />
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-red-50/90 dark:bg-red-950/90 backdrop-blur-sm">
            <p className="text-red-600 dark:text-red-400 text-sm font-medium">
              {error}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center w-full space-y-6">
        <button
          onClick={handleDescribe}
          disabled={!isCameraReady || isLoading}
          className="flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all disabled:opacity-50 disabled:hover:bg-blue-600 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Camera className="w-5 h-5" />
          )}
          {isLoading ? "Analyzing Image..." : "Describe Photo Using AI"}
        </button>

        <canvas ref={canvasRef} className="hidden" />

        {/* Output Section */}
        <div className="w-full min-h-[120px]">
          {description && (
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                AI Description
              </h3>
              <p className="text-emerald-900 dark:text-emerald-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {error && isCameraReady && (
            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500 mt-4">
              <h3 className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">
                Error
              </h3>
              <p className="text-red-900 dark:text-red-300 text-sm leading-relaxed">
                {error}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Examples;