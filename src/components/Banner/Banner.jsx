import BannerImage from "../../assets/Banner1.jpg";

function Banner() {
    return (
        <div className="w-full h-[40rem] relative">
            <img
                src={BannerImage}
                className="h-full w-full object-cover"
                alt="Banner"
            />
            <div className="absolute top-20 left-0 right-0 mx-auto w-[30rem] flex flex-col items-center text-center gap-4">
                <div className="font-semibold text-5xl text-white">
                    Crypto Tracker
                </div>
                <div className="font-semibold text-sm text-white">
                    Get all information regarding cryptocurrencies
                </div>
            </div>
        </div>
    );
}

export default Banner;
