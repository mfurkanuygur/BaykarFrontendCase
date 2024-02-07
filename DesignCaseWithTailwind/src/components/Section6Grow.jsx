import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { CollectionTabs } from '../Constant/constant';

import rightArrow from "../assets/images/rightArrow.png"
import tripleImage from "../assets/images/triple-image.png"
import webTripleImage from "../assets/images/web-triple-image.png"

const Section6Grow = () => {
    return (
        <section className="px-20 max-md:px-4 pt-12 pb-24  overflow-x-hidden">
            <div className="flex flex-col justify-center items-center gap-20">
                <div className="flex  flex-col text-left max-md:text-center  gap-8">
                    <h1 className="text-6xl max-md:text-3xl font-bold">Grow your collection</h1>
                    <p className='text-lg'>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                </div>
                <div className='grid grid-cols-[300px_minmax(auto,_1fr)] max-md:grid-cols-1 items-start overflow-x-hidden gap-8'>
                    <ul className='max-md:hidden flex flex-col justify-start gap-4 w-full'>
                        {
                            CollectionTabs.slice(0, 1).map(item => (
                                <li key={item.id} className='flex items-center p-4 mr-4 rounded-lg w-64 cursor-pointer border border-l-gray-100 bg-white shadow-xl'>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4 text-xl'>{item.title}</p>
                                    <div className='flex items-center max-md:hidden'><img src={rightArrow} alt="" /></div>
                                </li>
                            ))
                        }
                        {
                            CollectionTabs.slice(1).map(item => (
                                <li key={item.id} className='flex items-center p-4 mr-4 rounded-lg   w-64 cursor-pointer'>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4 text-xl'>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <ScrollingCarousel className=' gap-8 bg-transparent hidden max-md:block  rounded-md'>

                        {
                            CollectionTabs.slice(0, 1).map(item => (
                                <div key={item.id} className='flex items-center p-4 mr-4 rounded-lg w-fit cursor-pointer border border-[#00000012] bg-white shadow-xl'>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4 text-xl font-medium'>{item.title}</p>
                                </div>
                            ))
                        }

                        {
                            CollectionTabs.slice(1).map(item => (
                                <div key={item.id} className='flex items-center p-4 mx-4 rounded-lg  w-fit cursor-pointer '>
                                    <div> <img src={item.tabLogo} alt={item.title} /></div>
                                    <p className='px-4  text-xl font-medium'>{item.title}</p>
                                </div>
                            ))
                        }
                    </ScrollingCarousel>
                    <div className='bg-transparent '>
                        <div className='block max-md:hidden '><img src={webTripleImage} alt="" /></div>
                        <div className='hidden max-md:block '><img src={tripleImage} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6Grow