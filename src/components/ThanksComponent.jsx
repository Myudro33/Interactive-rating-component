import PropTypes from "prop-types";

function ThanksComponent({ array }) {
  const selected = array.map((item) => {
    if (item.selected) {
      return item.id;
    }
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      <img
        src="https://raw.githubusercontent.com/Myudro33/Interactive-rating-component/9639002119b8e71d3bada8181ec18cafe7b803f0/src/assets/illustration-thank-you.svg"
        alt="thanks"
      />
      <div className="px-4 py-2 rounded-3xl bg-[#252d37] mt-5">
        <h1 className="text-orange font-bold">
          You selected {selected} out of 5
        </h1>
      </div>
      <h1 className="text-white text-center mt-5 xs:text-xl lg:text-3xl font-bold">
        Thank you!
      </h1>
      <p className="text-center text-light-gray mt-4">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
ThanksComponent.propTypes = {
  array: PropTypes.array,
};
export default ThanksComponent;
