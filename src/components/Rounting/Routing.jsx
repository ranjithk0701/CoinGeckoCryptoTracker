import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../pages/Layout";
import PageLoader from "../pageLoader/pageLoader"
import CustomErrorBoundaryUI from "../CustomErrorBoundary/CustomErrorBoundary";
const Home = lazy(() => import('../../pages/Home'));
const CoinDetailsPage = lazy(() => import('../../pages/CoinDetailsPage'));

function Routing() {
    return (
        <CustomErrorBoundaryUI>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={
                        
                        <Suspense fallback={<PageLoader/>}>
                            <Home/>
                        </Suspense>
                    
                    }/>
                    <Route path="/details/:coinId" element={

                        <Suspense fallback={<PageLoader/>}>
                            <CoinDetailsPage/>
                        </Suspense>
        
                    }/>
                </Route>
            </Routes>
        </CustomErrorBoundaryUI>
       
    );
}
export default Routing;