import "./gnomelocker.css";

import gnome from "../../assets/happygnome.png";
import shoes from "../../assets/shoes.png";
import potion from "../../assets/potion.png";
import bag from "../../assets/bag.png";
import cupboard from "../../assets/cupboard.png";

function GnomeLocker() {
  return (
    <div className="locker-page">

      {/* CENTER GNOME */}
      <div className="gnome-center">
        <img src={gnome} className="locker-gnome" alt="" />
        <h2 className="locker-text">GNOME LOCKER</h2>
      </div>

      {/* ROTATING ITEMS */}
      <div className="orbit">

        <img src={shoes} className="item item1" alt="" />
        <img src={potion} className="item item2" alt="" />
        <img src={bag} className="item item4" alt="" />
        <img src={cupboard} className="item item5" alt="" />

      </div>

    </div>
  );
}

export default GnomeLocker;