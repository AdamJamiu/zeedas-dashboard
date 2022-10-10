import Image from 'next/image';
import React from 'react'
import fcmb from "../../public/fcmb.svg"
import closed from "../../public/closed.svg"

// material ui componenets
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// material icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Sidebar() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='flex flex-col py-10 px-5 items-center flex-nowrap bg-white'>
            <div className='gap-3 items-center w-[max-content] flex-nowrap items-center flex flex-row'>
                <ArrowBackIosIcon className='text-[15px] cursor-pointer' />
                <div className='flex flex-row items-center'>
                    <Image src={fcmb} height={25} width={25} />
                    <p className="font-black text-sm pl-3 w-[max-content]">FCMB: Mobile</p>
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
                    {/* <div className='flex items-center font-bold text-greyTxt flex-row justify-between'>
                        <Image src={closed} height={18} width={18} />
                    </div> */}
                    <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{ margin: '0px', h: 0 }}
                        >
                            <p className='text-[#23B3E8] font-bold'>Overview</p>
                        </AccordionSummary>
                        <AccordionDetails className='border-l pb-0 flex flex-col justify-stretch w-full'>
                            <div className='hover:text-[#23B3E8] border-l-2 border-[#23B3E8] p-3'>
                                <span className='w-[max-content] p-3'>Project Status</span>
                            </div>
                            <div className='hover:text-[#23B3E8] p-3 cursor-pointer'>
                                <span className='w-[max-content] p-3 '>Planning</span>
                            </div>
                            <div className='hover:text-[#23B3E8] p-3 cursor-pointer'>
                                <span className='w-[max-content] p-3 '>Teamwork</span>
                            </div>
                            <div className='hover:text-[#23B3E8] p-3 cursor-pointer'>
                                <span className='w-[max-content] p-3 '>Team health</span>
                            </div>
                            <div className='hover:text-[#23B3E8] p-3 cursor-pointer'>
                                <span className='w-[max-content] p-3'>Investment</span>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;