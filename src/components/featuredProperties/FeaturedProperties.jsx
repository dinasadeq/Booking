
import "./featuredProperties.css"

const FeaturedProperties = () => {
    return(

        <div className="fp">
         <div className="fpItem">
            <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/491875902.jpg?k=3d648d6e8a778b70360966b102d87365172480d162091349163c710672eb8306&o=&hp=1"
            alt=""
            />
            <span className="fpName"> Aparthotel Stare Miasto</span>
            <span className="fpCity"> Cairo</span>
            <span className="fpPrice">starting from $20</span>
            <div className="fpRating">
                <button>8.9</button>
              <span>Excellent</span>

            </div>
        </div>

            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/490883675.jpg?k=9423e8b9979545349c8019aaa2e675802ee7f6f0535e42c410983cd428258023&o=&hp=1"
                    alt=""
                />
                <span className="fpName"> Aparthotel Stare Miasto</span>
                <span className="fpCity"> Cairo</span>
                <span className="fpPrice">starting from $20</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>

                </div>
                </div>
                </div>

    )
}
export default FeaturedProperties