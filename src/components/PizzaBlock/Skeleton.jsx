import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="150" r="140" /> 
    <rect x="0" y="341" rx="11" ry="11" width="280" height="101" /> 
    <rect x="0" y="456" rx="10" ry="10" width="88" height="33" /> 
    <rect x="127" y="454" rx="10" ry="10" width="153" height="39" /> 
    <rect x="0" y="304" rx="10" ry="10" width="280" height="26" />
  </ContentLoader>
)

export default Skeleton