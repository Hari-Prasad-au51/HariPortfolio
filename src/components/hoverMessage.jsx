import PropTypes from "prop-types"

function HoverMessage({data}) {
  return (
   <>
   <div className="realtive inline-block z-10 shadow-lg shadow-primarycolor">
    <div className="border flex flex-col p-2 justify-center items-center bg-tertiarycolor text-primarycolor rounded-sm">
        <div className="text-bold text-xl">
        {data}
        </div>
        <div className="absolute bottom-full right-0 transform -translate-x-1/2  h-0 w-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-tertiarycolor"></div>
    </div>
   </div>
   </>
  )
}

export default HoverMessage
HoverMessage.propTypes = {
  data: PropTypes.string,
}

