const Portfolio = ({portfolio}) => {
   const {image } = portfolio;
   return (
      <div>
         <figure >
            <img className=" rounded-lg" src={image} alt="" />
         </figure>
      </div>
   )
}

export default Portfolio;