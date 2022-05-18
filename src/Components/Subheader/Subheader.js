import "./subheader.css"


function Subheader ({title, text, btn}){
  return (
    <div className="subheader__inner">
    <div className="subheader__info">
    <h3 className="subheader__title"> {title} </h3>
    <p className="subheader__text"> {text} </p>
    </div>
    <button className="subheader__btn"> {btn} </button>
    </div>
    )
  }

  export default Subheader;