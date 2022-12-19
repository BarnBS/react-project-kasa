import montagnes from  "../../assets/images/montagnes.png";

//Returns a Banner for About page
function BannerAbout () {
    return <>
        <img src={montagnes} alt="Paysage de montagne" className="montagneImage"/>
    </>
}

export default BannerAbout