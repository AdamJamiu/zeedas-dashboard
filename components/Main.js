import Image from 'next/image';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import chart from "../public/chart.svg";
import greenDot from "../public/greenDot.svg";
import blueDot from "../public/blueDot.svg";
import purpleDot from "../public/purpleDot.svg";
import blackDot from "../public/blackDot.svg";
import greyDot from "../public/greyDot.svg";
import { MyBar } from "../components/elements/chart"


const MainPage = () => {
    return (
        <div className='p-4 h-[max-content]'>
            <div className='flex-wrap flex  mb-[5em] mt-7'>

                <div className='w-full flex flex-row items-center justify-between'>
                    <p className='font-black text-xl'>Project stats</p>
                    <select className='bg-white rounded-lg w-[150px] p-2'>
                        <option>All time</option>
                        <option>All time</option>
                    </select>
                </div>

                <div className='pro-stat-container'>

                    <div className='grid-one bg-white p-4 rounded'>
                        <div className='items-center text-[#03293D] gap-3 text-sm flex flex-row py-2 border-b border-light'>
                            <p className=''>Average PR size</p>
                            <InfoOutlinedIcon className='text-greyTxt text-[16px] cursor-pointer' />
                        </div>


                        <div className='flex flex-row gap-5 mt-5'>

                            <div>
                                <div className=''>
                                    <span className='font-black text-xl'>268</span>
                                    <span className='ml-1 text-sm text-greyTxt'>Lines</span>
                                </div>
                                <p className='text-sm text-greyTxt font-bold'>Line Change</p>

                                <div className='mt-5 gap-1 p-2 bg-greenOpa text-[#4DBD98] w-[fit-content] flex flex-row items-center'>
                                    <NorthOutlinedIcon className="text-sm" color='inherit' />
                                    <p className='text-sm font-bold'>24%</p>
                                </div>
                            </div>
                            {/* ----- */}
                            <div>
                                <div className=''>
                                    <span className='font-black text-xl'>240</span>
                                    <span className='ml-1 text-sm text-greyTxt'>kb</span>
                                </div>
                                <p className='text-sm text-greyTxt font-bold'>Size</p>
                            </div>

                        </div>

                    </div>

                    {/* grid two */}
                    <div className='grid-two bg-white p-4 rounded'>
                        <div className='items-center text-[#03293D] gap-3 text-sm flex flex-row py-2 border-b border-light'>
                            <p className=''>Average Ticket Duration</p>
                            <InfoOutlinedIcon className='text-greyTxt text-[16px] cursor-pointer' />
                        </div>


                        <div className='flex flex-row gap-5 mt-5'>

                            <div>
                                <div className=''>
                                    <span className='font-black text-xl'>36</span>
                                    <span className='ml-1 text-sm text-greyTxt'>hours</span>
                                </div>
                                <p className='text-sm text-greyTxt font-bold'>Hours worked</p>

                                <div className='mt-5 gap-1 p-2 bg-redOpa text-[#F15832] w-[fit-content] flex flex-row items-center'>
                                    <NorthOutlinedIcon className="text-sm" color='inherit' />
                                    <p className='text-sm font-bold'>79%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* grid three */}

                    <div className='grid-three bg-white p-4 rounded'>
                        <div className='items-center text-[#03293D] gap-3 text-sm flex flex-row py-2 border-b border-light'>
                            <p className=''>Average Ticket Duration</p>
                            <InfoOutlinedIcon className='text-greyTxt text-[16px] cursor-pointer' />
                        </div>

                        <div className='flex gap-3 flex-row'>
                            <div className='mt-5'>
                                <span className='font-black text-xl'>968</span>
                                <span className='ml-1 text-sm text-greyTxt'>hours</span>
                            </div>

                            <div className='mt-5'>
                                <span className='font-black text-xl'>54</span>
                                <span className='ml-1 text-sm text-greyTxt'>tickets</span>
                            </div>

                            <div className='mt-5'>
                                <span className='font-black text-xl'>4</span>
                                <span className='ml-1 text-sm text-greyTxt'>total weeks worked</span>
                            </div>
                        </div>
                    </div>

                    {/* grid four */}
                    <div className='grid-four bg-white p-4'>
                        <div className='items-center text-[#03293D] gap-3 text-sm flex flex-row py-2 border-b border-light'>
                            <p className=''>Cycle Time</p>
                            <InfoOutlinedIcon className='text-greyTxt text-[16px] cursor-pointer' />
                        </div>

                        <div className='mt-5 text-left items-center justify-center gap-10 flex-row flex'>
                            <Image src={chart} width={200} height={200} alt="" />

                            <div className='flex flex-col gap-5'>

                                <div className='flex justify-start flex-row w-[max-content] items-center gap-2'>
                                    <Image src={greenDot} width={15} height={15} alt="" />
                                    <p className=''>Coding</p>
                                </div>

                                <div className='flex justify-start flex-row w-[max-content] items-center gap-2'>
                                    <Image src={blueDot} width={15} height={15} alt="" />
                                    <p className=''>Code Review</p>
                                </div>

                                <div className='flex justify-start items-center flex-row w-[max-content] gap-2'>
                                    <Image src={blackDot} width={15} height={15} alt="" />
                                    <p className=''>Idle Time</p>
                                </div>

                                <div className='flex justify-start items-center flex-row w-[max-content] gap-2'>
                                    <Image src={purpleDot} width={15} height={15} alt="" />
                                    <p className=''>Deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* grid five */}
                    <div className='grid-five bg-white p-4 rounded'>
                        <div className='justify-between items-center text-[#03293D] gap-3 text-sm flex flex-row py-2 border-b border-light'>
                            <div className='items-center text-[#03293D] gap-3 text-sm flex flex-row'>
                                <p className=''>Idle Time Breakdown</p>
                                <InfoOutlinedIcon className='text-greyTxt text-[16px] cursor-pointer' />
                            </div>

                            <div className='items-center gap-3 flex flex-row pr-2'>
                                <div className='items-center gap-3 flex flex-row'>
                                    <Image src={greyDot} width={15} height={15} alt="" />
                                    <p>Idle</p>
                                </div>

                                <div className='items-center gap-3 flex flex-row'>
                                    <Image src={greenDot} width={15} height={15} alt="" />
                                    <p>Idle</p>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <MyBar />
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='w-full flex flex-row items-center justify-between my-10'>
                    <p className='font-black text-xl'>Planning</p>
                    <select className='bg-white rounded-lg w-[150px] p-2'>
                        <option>All time</option>
                        <option>All time</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default MainPage;