import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// const Page = lazy(() => import("./test"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<div>first page</div>} />
        </Routes>
    );
};