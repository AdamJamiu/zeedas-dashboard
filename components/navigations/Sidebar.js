import { useState } from 'react';
import Image from 'next/image';
import React from 'react'
import fcmb from "../../public/fcmb.svg"
import closed from "../../public/closed.svg"

// material ui componenets
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// material icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Sidebar() {
    const [active, setActive] = useState("pro-status")

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='flex justify-start flex-col py-10 px-5 items-center flex-nowrap bg-white'>
            <div className='gap-3 items-center w-[max-content] flex-nowrap flex flex-row'>
                <div>
                    <ArrowBackIosIcon className='text-[14px] cursor-pointer' />
                </div>
                <div className='flex flex-row items-center'>
                    <Image src={fcmb} height={25} width={25} alt="" />
                    <span className="font-black text-sm pl-3 w-[max-content]">FCMB: Mobile</span>
                    <span className='font-black pl-3'>....</span>
                </div>
            </div>

            <div className='py-10 text-left flex flex-col justify-start w-full'>
                <div>
                    <p className='text-greyTxt font-bold'>Workflows</p>
                    <select className='bg-[#e5e5e5] p-2 rounded-xl font-bold w-full mt-3'>
                        <option value="volvo">Product dev</option>
                        <option value="volvo">Product dev</option>
                    </select>
                </div>

                <div className='mt-10'>
                    <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ margin: '0px', h: 0 }}
                        >
                            <p className='text-[#23B3E8] font-bold'>Overview</p>
                        </AccordionSummary>
                        <AccordionDetails className='border-l border-light pb-0 flex flex-col mt-2 justify-stretch w-full'>

                            <div className={`${active === 'pro-status' ? 'font-bold border-l-2 border-[#23B3E8] text-[#23B3E8]' : 'text-greyTxt'} cursor-pointer px-3 py-1 `}>
                                <span className='w-[max-content] p-3'>Project Status</span>
                            </div>

                            <div className={`${active === 'planning' ? 'font-bold border-l-2 border-[#23B3E8] text-[#23B3E8]' : 'text-greyTxt'} cursor-pointer px-3 py-1 `}
                                onClick={() => setActive('planning')}>
                                <span className='w-[max-content] px-3 '>Planning</span>
                            </div>

                            <div className={`${active === 'teamwork' ? 'font-bold border-l-2 border-[#23B3E8] text-[#23B3E8]' : 'text-greyTxt'} cursor-pointer px-3 py-1 `}
                                onClick={() => setActive('teamwork')}>
                                <span className='w-[max-content] p-3 '>Teamwork</span>
                            </div>

                            <div className={`${active === 'team-health' ? 'font-bold border-l-2 border-[#23B3E8] text-[#23B3E8]' : 'text-greyTxt'} cursor-pointer px-3 py-1 `}
                                onClick={() => setActive('team-health')}>
                                <span className='w-[max-content] p-3 '>Team health</span>
                            </div>

                            <div className={`${active === 'investment' ? 'font-bold border-l-2 border-[#23B3E8] text-[#23B3E8]' : 'text-greyTxt'} cursor-pointer px-3 py-1 `}
                                onClick={() => setActive('investment')}>
                                <span className='w-[max-content] p-3'>Investment</span>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <div className='pl-4'>
                        <div className='my-5 cursor-pointer'>
                            <p className='hover:text-[#23B3E8] text-greyTxt'>Action center</p>
                        </div>

                        <div className='my-5 cursor-pointer'>
                            <p className='hover:text-[#23B3E8] text-greyTxt'>Apps</p>
                        </div>

                        <div className='my-5 cursor-pointer'>
                            <p className='hover:text-[#23B3E8] text-greyTxt'>Tasks</p>
                        </div>

                        <div className='my-5 cursor-pointer'>
                            <p className='hover:text-[#23B3E8] text-greyTxt'>Code review</p>
                        </div>

                        <div className='my-5 cursor-pointer'>
                            <p className='hover:text-[#23B3E8] text-greyTxt'>QA review</p>
                        </div>

                        <div className='my-5 cursor-pointer'>
                            <p className='hover:text-[#23B3E8] text-greyTxt'>Notes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;