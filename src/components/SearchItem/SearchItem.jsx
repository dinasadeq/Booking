
import "./searchItem.css"

const SearchItem =() => {

    return(

        <div className="SearchItem">
            <img
                src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/130099506.jpg?k=d9f4674a427e147998896d9b86503a529edad3cb4c72677ff75bde7a1b30d35b&o="
                alt=""
            className="siImg"
            />
            <div className="siDesc">
            <h1 className="siTtles"></h1>
            <span className="siDistance"></span>
            <span className="siTaxiOp"></span>
            <span className="siSubTitle"></span>
            <span className="siFeatures"></span>
                <span className="siCancelOp"></span>
                <span className="siCancelOpSubtitles"></span>

            </div>
            <div className="siDetails"></div>
              <div className="siRating">
                 <span>Excellent</span>
                  <button>8.9</button>
                  <div className="siDetailsTexts">
                   <span className= "siPrice">$123</span>
                      <span className= "siTaxiOp">Includes taxes and fees</span>
                      <button className="siCheckButton">see availability</button>
                  </div>
              </div>
        </div>
    )


}
export default SearchItem