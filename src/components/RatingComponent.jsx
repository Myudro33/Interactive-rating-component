import PropTypes from "prop-types";

function RatingComponent({array,setArray,selected,setSelected,setSubmited}) {

  const select = (id) => {
        const newArray = array.map((item)=>{
            if(item.id!==id){
                return item
            }
            array.map((i)=>{
                return i.selected=false
            })
            return {...item,selected: true}
        })
        setArray(newArray)
        setSelected(true)
  };
  return (
    <div className="w-full h-full">
      <div className="w-10 h-10 bg-[#252d37] rounded-full flex justify-center items-center">
        <img
          src="https://raw.githubusercontent.com/Myudro33/Interactive-rating-component/9639002119b8e71d3bada8181ec18cafe7b803f0/src/assets/icon-star.svg"
          alt="star"
        />
      </div>
      <h1 className="text-white font-bold lg:text-3xl lg:mt-5">
        How did we do?
      </h1>
      <p className="text-light-gray lg:mt-5 lg:text-base">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex w-full justify-between lg:mt-5">
        {array.map((i, index) => {
          return (
            <div
              onClick={() => select(index)}
              className={`w-10 h-10 ${i.selected?'bg-orange':'bg-[#252d37] hover:bg-light-gray'}  cursor-pointer flex justify-center items-center rounded-full`}
              key={index}
            >
              {++index}
            </div>
          );
        })}
      </div>
      <button onClick={()=>selected&&setSubmited(true)} className="w-full h-10 bg-orange rounded-2xl lg:mt-10 font-bold">Submit</button>
    </div>
  );
}
RatingComponent.propTypes = {
    array: PropTypes.array,
    setArray: PropTypes.func,
    selected:PropTypes.bool,
    setSelected:PropTypes.func,
    setSubmited:PropTypes.func
  };

export default RatingComponent;
