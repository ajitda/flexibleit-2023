import React, { useState } from 'react';
import Footer from '../../home/Footer';
import styles from '../../../style';
import Navbar from '../../home/Navbar';

function AreaCalculator() {
   const [shape, setShape] = useState('quadrilateral');
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [sideD, setSideD] = useState('');
  const [areas, setAreas] = useState([]);
//   const [areas, setAllArea]

  const handleSubmit = (event) => {
    event.preventDefault();
    const oldareas = areas;
    if (shape === 'quadrilateral'){
        const s = (parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC) + parseFloat(sideD)) / 2;
        const area = Math.sqrt(
          (s - parseFloat(sideA)) * (s - parseFloat(sideB)) * (s - parseFloat(sideC)) * (s - parseFloat(sideD))
        );
    
        setAreas((prevAreas) => [
          { sideA, sideB, sideC, sideD, area: area.toFixed(2) },
          ...prevAreas,
        ]);
   } else {
        const s = (parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)) / 2;
        const area = Math.sqrt(s * (s - parseFloat(sideA)) * (s - parseFloat(sideB)) * (s - parseFloat(sideC)));
        setAreas([{ sideA, sideB, sideC, area: area.toFixed(2) }, ...areas]);
    }
    
    
   //  oldareas.push();
    console.log('first', oldareas)
   
    setSideA('');
    setSideB('');
    setSideC('');
    setSideD('');
  }

  const deleteArea = (index) => {
      console.log('index', index)
      const newAreas = areas;
      newAreas.splice(index, 1);
      setAreas([...newAreas])
  }

  return (<div className='w-full font-b612'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar />
        </div>
    </div>
    <div class="mb-3">
    <h1 class={`${styles.heading2} text-5xl font-semibold mb-8 text-center pt-10`}>Area calculator to calculate area</h1>
    <div class="grid place-items-center">
        <div class={`${styles.paragraph} w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mb-7`}>
            <p class="text-center">In many aspects we need to calculate area. You can easily calculate the area. Here is the simple process.</p>
            <ul class="list-disc ml-9 my-5">
                <li>Give the sizes of 4 sides in feet.</li>
                <li>Then click <span class="font-bold">Submit</span> button</li>
            </ul>
        </div>
    </div>

    <div>
        <div class='container md:mb-8 mb-14'>
            <form onSubmit={handleSubmit}>
                <div class="row md:pl-80 pl-7 xl:pl-[570px]">
                    <label class="">Shape:</label>
                    <div className='grid grid-cols-2'>
                        <div class="form-group">
                                <select class='form-control border-2 border-sky-500 w-40 h-12' value={shape} onChange={(e) => setShape(e.target.value)} >
                                    <option value="triangle">Triangle</option>
                                    <option value="quadrilateral">Quadrilateral</option>
                                </select>
                        </div>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='grid md:grid-cols-4 grid-cols-2 md:pl-80 xl:pl-[30rem] pl-7'>       
                        <div class="">
                            <div class="form-group">
                                <label class="block">
                                    Side A (feet):
                                    <input type="number" class='form-control border-2 border-sky-500 w-40 h-12 p-2' value={sideA} onChange={(e) => setSideA(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div class="">
                            <div class="form-group">
                                <label class="block">
                                    Side B (feet):
                                    <input type="number" class='form-control border-2 border-sky-500 w-40 h-12 p-2' value={sideB} onChange={(e) => setSideB(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        <div class="">
                            <div class="form-group">
                                <label class="block">
                                    Side C (feet):
                                    <input type="number" class='form-control border-2 border-sky-500 w-40 h-12 p-2' value={sideC} onChange={(e) => setSideC(e.target.value)} />
                                </label>
                            </div>
                        </div>

                        {shape === 'triangle' ? '' :
                            <div class="">
                                <div class="form-group">
                                    <label class="block">
                                        Side D (feet):
                                        <input type="number" class='form-control border-2 border-sky-500 w-40 h-12 p-2' value={sideD} onChange={(e) => setSideD(e.target.value)} />
                                    </label>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='md:pl-80 xl:pl-[36rem] pl-7'>
                        <button class='bg-secondary text-white inline-block px-2 py-3 rounded-md' type="submit">Calculate Area</button>
                    </div>
                </div>
            </form>

            <p></p>

            <div className='row mt-5 md:pb-14 md:pl-80 px-5'>
                <div class='border-2'>
                    {areas?.map((ar, ind)=>(
                        <div key={'ind-'+ind} class='card border-e5'>
                            <div class="card-body">
                                <div className='flex'>
                                    <div className='p-5'>
                                        Sides: A={ar.sideA}ft, B={ar.sideB}ft, C={ar.sideC}ft, {ar.sideD ? <>D={ar.sideD}ft</> : ''} <br/>
                                        Area: {isNaN(ar.area) ? 'Invalid input' : ar.area} sqft
                                    </div>
                                    <div className='p-5'>
                                        <span onClick={()=>deleteArea(ind)} className='absolute cursor-pointer text-red-600 text-2xl md:right-56 xl:right-60 right-20'>x</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>

    <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
    </div>
    </div>);
}

export default AreaCalculator;