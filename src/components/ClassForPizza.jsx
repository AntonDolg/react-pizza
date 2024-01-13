// import React from 'react';

// class List extends React.Component{
//     state={
//         typesName:['тонкое','традиционное'],
//         activeType:0,
//     }
//     setActiveType=(typesId)=>{
//         this.state.activeType=typesId;
//     }
//     render(types){
//         return(
//             <div>
//                 <ul>
//                 {
//                     types.map((typesId,i)=>(
//                         <li key={i} className={this.state.activeType===typesId?'active':''} onClick={()=>this.setActiveType(typesId)}>{this.state.typesName[typesId]}</li>
//                     ))
//                 }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default List;