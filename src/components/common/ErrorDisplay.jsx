import React from "react";

const ErrorDisplay = ({message}) => {
    return (
        <div className="text-center p-5 text-red-600 bg-red-100 border border-red-400 rounded-lg mx-auto my-4 max-w-md">
            <p className="font-semibold">{message}</p>
            <p className="text-sm">Please try again later.</p>
        </div>
    )
};

export default ErrorDisplay;