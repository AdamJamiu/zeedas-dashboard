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

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
// material icons
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


const SideNav = () => {

    return (

        <div className='px-5 h-full w-[100px] bg-[#052231] overflow-y-hidde'>

            <div className='pb-7 h-fit pt-[3em] flex flex-col items-center'>

                <IconButton size='medium' color="inherit" className='mb-5 bg-glass text-white hover:bg-glss'>
                    <UnfoldMoreIcon fontSize='inherit' />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-5 bg-transparent text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={search} height={22} width={22} />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-5 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={home} height={22} width={22} />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-5 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={inbox} height={22} width={22} />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-5 bg-[#23B3E8] text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={project} height={20} width={22} />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-5 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={people} height={20} width={22} />
                </IconButton>

                <IconButton size='medium' color="inherit" className='mb-5 text-white rounded-[.5em] hover:bg-glass'>
                    <Image src={wallet} height={22} width={22} />
                </IconButton>

            </div>

            <div className='py-3 h-fit flex flex-col justify-center items-stretch'>
                <IconButton size='small' color="inherit" className='mb-5 bg-[#23B3E8] text-white hover:bg-[#23B3E8]'>
                    PN
                </IconButton>

                <IconButton size='small' color="inherit" className='mb-5 bg-[#4DBD98] text-white hover:bg-[#4DBD98]'>
                    JI
                </IconButton>

                <IconButton size='small' color="inherit" className='mb-5 bg-[#3D43A2] text-white hover:bg-[#3D43A2]'>
                    LG
                </IconButton>

                <IconButton size='small' color="inherit" className='mb-5 bg-[#F15832] text-white hover:bg-[#F15832]'>
                    AW
                </IconButton>

            </div>

        </div>
    )
}

export default SideNav;