import { useState } from 'react';
import Image from 'next/image';
import arrowUpDown from "../../public/arrow-upp-down.png";
import search from "../../public/search.svg";
import home from "../../public/home.svg";
import inbox from "../../public/inbox.svg";
import info from "../../public/inbox.svg";
import people from "../../public/people.png"
import project from "../../public/project.svg";
import wallet from "../../public/wallet.svg";

import { IconButton } from '@mui/material';

// material icons
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SideNav = () => {

    return (

        <div className='flex flex-col divide-zinc-700 divide-y px-5 h-full w-[100px] bg-[#052231] overflow-y-hidden'>

            <div className='pb-7 h-fit pt-[1em] flex flex-col items-center'>

                <IconButton size='medium' color="inherit" className='mb-3 bg-glass text-white hover:bg-glss'>
                    <UnfoldMoreIcon fontSize='inherit' />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-3 bg-transparent text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={search} height={22} width={22} alt="" />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-3 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={home} height={22} width={22} alt="" />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-3 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={inbox} height={22} width={22} alt="" />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-3 bg-[#23B3E8] text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={project} height={20} width={22} alt="" />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-3 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={people} height={20} width={22} alt="" />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-3 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={wallet} height={22} width={22} alt="" />
                </IconButton>

            </div>

            <div className='py-3 h-fit text-xs flex flex-col justify-center items-stretch'>
                <IconButton size='inherit' color="inherit" className='text-xs mb-5 bg-[#23B3E8] text-white hover:bg-[#23B3E8]'>
                    PN
                </IconButton>

                <IconButton size='inherit' color="inherit" className='text-xs mb-5 text-sm bg-[#4DBD98] text-white hover:bg-[#4DBD98]'>
                    JI
                </IconButton>

                <IconButton size='inherit' color="inherit" className='text-xs mb-5 bg-[#3D43A2] text-white hover:bg-[#3D43A2]'>
                    LG
                </IconButton>

                <IconButton size='inherit' color="inherit" className='text-xs mb-5 bg-[#F15832] text-white hover:bg-[#F15832]'>
                    AW
                </IconButton>

            </div>

            <div className='mt-auto'>
                <ArrowForwardIosIcon />
            </div>

        </div>
    )
}

export default SideNav;