function Car(props){
   
   // const {brand,color} = props
   // const text=`Hi, Im a ${brand} ${color}car`;

   const { carInfo } = props;
   const { brand,color } = carInfo;

   const text=`Hi, iam a ${brand} ${color} car`;

    return(

       <h2>{text}</h2>

       );
}



export default Car