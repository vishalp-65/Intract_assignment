"use client";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState(42 * 60 * 60); // 8 hours in seconds

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const formatTime = (time: number) => {
        const days = Math.floor(time / (24 * 3600));
        const hours = Math.floor((time % (24 * 3600)) / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = formatTime(time);

    return (
        <div className="bg-bgColour rounded-xl w-full">
            <div className="flex bg-dotted-spacing-2 bg-dotted-gray-900 rounded-lg px-4 py-3 gap-4 items-center justify-evenly text-3xl font-semibold text-gray-300 w-full">
                <div className="flex flex-col items-center justify-between gap-2">
                    <p>{String(days).padStart(2, "0")}</p>
                    <p className="text-base font-normal text-gray-600">Days</p>
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                    <p>{String(hours).padStart(2, "0")}</p>
                    <p className="text-base font-normal text-gray-600">Hrs</p>
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                    <p>{String(minutes).padStart(2, "0")}</p>
                    <p className="text-base font-normal text-gray-600">Mins</p>
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                    <p>{String(seconds).padStart(2, "0")}</p>
                    <p className="text-base font-normal text-gray-600">Sec</p>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
