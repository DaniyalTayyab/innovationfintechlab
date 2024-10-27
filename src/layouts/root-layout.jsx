import Footer from "../app/sections/common/footer";
import Header2 from "../app/sections/common/header2";
import AppRoutes from "../routing/app-routes";

function RootLayout() {

    return (
        <>
            <div className="page-wraper">
                <Header2 />
                <div className="page-content">
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RootLayout;